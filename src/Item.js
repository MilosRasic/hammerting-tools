import {createMemo, splitProps} from 'solid-js';

import {componentTypes, components as allComponents} from './data/components';

export default function Item(props) {
	const [ownedMats] = splitProps(props, ['metals', 'craftedBones']);

	const components = createMemo(() => props.recipe.components.map(component => ({
		...component,
		candidates: allComponents.filter(candidate => {
				if (candidate.type !== component.type) {
					return false;
				}

				return ownedMats[candidate.material.type].length > 0;
			}
		),
	})));

	const hasAllComponents = createMemo(() => components().every(component => component.candidates.length > 0));

	const componentsWithConcreteParts = createMemo(() => {
		if (!hasAllComponents) {
			return [];
		}

		const newComponents = components().map(component => ({
			...component,
			implementations: component.candidates.reduce((acc, candidate) => {
				for (const material of ownedMats[candidate.material.type]) {
					const impl = {
						name: `${material.name} ${candidate.name}`,
						hardness: material.hardness * candidate.hardness,
						preciousness: material.preciousness * candidate.preciousness,
						resilience: material.resilience * candidate.resilience,
						weight: material.weight * candidate.weight,
					};

					impl.scores = props.recipe.skills.reduce((acc, skill) => {
						const good = skill.good.reduce((acc, attr) => acc + impl[attr], 0);
						const bad = skill.bad.reduce((acc, attr) => acc + impl[attr], 0);

						acc[skill.name] = good - bad;

						return acc;
					}, {});

					acc.push(impl)
				}
				
				return acc;
			}, []),
		}));

		newComponents.forEach(newComponent => {
			const firstSkill = props.recipe.skills[0].name;

			newComponent.implementations.sort((a, b) => b.scores[firstSkill] - a.scores[firstSkill]);
		});

		return newComponents;
	});

	return (
		<>
			{hasAllComponents() && <fieldset>
				<legend>{props.recipe.name}</legend>

				{componentsWithConcreteParts().map(component => (
					<div>
						<span class="headerlet">{component.type}</span>
						<ul>
							{component.implementations.map(impl => (
								<li>
									<p>{impl.name} (H {impl.hardness.toFixed(2)}, P {impl.preciousness.toFixed(2)}, R {impl.resilience.toFixed(2)}, W {impl.weight.toFixed(2)})</p>
									<ul>
										{Object.keys(impl.scores).map(skill => (
											<li>{skill}: {impl.scores[skill].toFixed(2)}</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</div>
				))}
			</fieldset>}
		</>
	);
}

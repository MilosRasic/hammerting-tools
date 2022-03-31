import {createStore} from 'solid-js/store';
import {createMemo} from 'solid-js';

import bonesDefs from './data/bones';
import metalsDefs from './data/metals';
import craftedBonesRules from './data/craftedBones';
import items from './data/items';

import Item from './Item';

import './App.css';

function App() {
	const [bones, setBones] = createStore(bonesDefs.map(bone => ({...bone, owned: false})));
	const [metals, setMetals] = createStore(metalsDefs.map(metal => ({...metal, owned: false})));

	const handleClick = (checkbox, store, setStore) => setStore(store.map(item => {
		if (item.name === checkbox.name) {
			return {
				...item,
				owned: checkbox.checked,
			};
		}

		return item;
	}));

	const handleMetalClick = event => handleClick(event.target, metals, setMetals);

	const handleBoneClick = event => handleClick(event.target, bones, setBones);

	const ownedMetals = createMemo(() => metals.filter(metal => metal.owned));

	const ownedCraftedBones = createMemo(() => {
		const ownedBones = bones.filter(bone => bone.owned);

		return ownedBones.reduce((acc, bone) => {
			for (const craftedBone of craftedBonesRules) {
				acc.push({
					name: `${craftedBone.name} ${bone.name}`,
					hardness: bone.hardness * craftedBone.hardness,
					preciousness: bone.preciousness * craftedBone.preciousness,
					resilience: bone.resilience * craftedBone.resilience,
					weight: bone.weight * craftedBone.weight,
				});
			}

			return acc;
		}, []);
	});

	return (
		<div class="App">
			<div>
				<span class="headerlet">Bones</span>
				<ul class="flat-list">
				{bones.map(bone => (
					<li>
						<label>{bone.name}<input type="checkbox" name={bone.name} value="1" checked={bone.owned} onClick={handleBoneClick} /></label>
					</li>
				))}
				</ul>
			</div>

			<div>
				<span class="headerlet">Metals</span>
				<ul class="flat-list">
				{metals.map(metal => (
					<li>
						<label>{metal.name}<input type="checkbox" name={metal.name} value="1" checked={metal.owned} onClick={handleMetalClick} /></label>
					</li>
				))}
				</ul>
			</div>

			<div class="items">
				{items.map(item => (
					<Item recipe={item} metals={ownedMetals()} craftedBones={ownedCraftedBones()} />
				))}
			</div>
		</div>
	);
}

export default App;

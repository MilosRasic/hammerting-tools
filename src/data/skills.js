const HARDNESS = 'hardness';
const PRECIOUSNESS = 'preciousness';
const RESILIENCE = 'resilience'
const WEIGHT = 'weight';

export default {
	mining: {
		name: 'Mining',
		good: [HARDNESS, WEIGHT],
		bad: [PRECIOUSNESS]
	},
	stonemasonry: {
		name: 'Stonemasonry',
		good: [HARDNESS, PRECIOUSNESS],
		bad: [WEIGHT]
	},
	metallurgy: {
		name: 'Metallurgy',
		good: [PRECIOUSNESS, RESILIENCE],
		bad: [WEIGHT],
	},
	building: {
		name: 'Building',
		good: [HARDNESS, WEIGHT],
		bad: [PRECIOUSNESS],
	},
	hauling: {
		name: 'Hauling',
		good: [PRECIOUSNESS, RESILIENCE],
		bad: [WEIGHT],
	},
	healing: {
		name: 'Healing',
		good: [],
		bad: [],
	},
	arcanist: {
		name: 'Arcanist',
		good: [],
		bad: [],
	},
	combat: {
		name: 'Combat',
		good: [HARDNESS, PRECIOUSNESS, RESILIENCE],
		bad: [],
	},
	farming: {
		name: 'Farming',
		good: [PRECIOUSNESS, RESILIENCE],
		bad: [HARDNESS],
	},
	trading: {
		name: 'Trading',
		good: [],
		bad: [],
	},
	cooking: {
		name: 'Cooking',
		good: [HARDNESS, PRECIOUSNESS],
		bad: [RESILIENCE],
	},
	blacksmithing: {
		name: 'Blacksmithing',
		good: [HARDNESS, RESILIENCE],
		bad: [PRECIOUSNESS],
	},
	exploring: {
		name: 'Exploring',
		good: [PRECIOUSNESS],
		bad: [WEIGHT],
	},
	tailoring: {
		name: 'Tailoring',
		good: [PRECIOUSNESS],
		bad: [WEIGHT],
	},
	whitesmithing: {
		name: 'Whitesmithing',
		good: [PRECIOUSNESS, WEIGHT],
		bad: [HARDNESS],
	},
};
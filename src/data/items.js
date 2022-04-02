import {componentTypes} from './components';
import skills from './skills';

export default [
	{
		name: "Stonemason's Chisel",
		skills: [skills.stonemasonry],
		hardness: 1,
		preciousness: 0.75,
		resilience: 1,
		weight: 0.75,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.CHISEL, num: 1},
		],
	},
	{
		name: "Whitesmith's Hammer",
		skills: [skills.whitesmithing],
		hardness: 1,
		preciousness: 1.1,
		resilience: 1,
		weight: 0.9,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.HAMMER, num: 1},
		],
	},
	{
		name: "Blacksmith's Hammer",
		skills: [skills.blacksmithing, skills.building, skills.metallurgy],
		hardness: 1,
		preciousness: 0.9,
		resilience: 1,
		weight: 1.1,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.HAMMER, num: 1},
		],
	},
	{
		name: "Miner's Pickaxe",
		skills: [skills.mining, skills.stonemasonry],
		hardness: 1,
		preciousness: 0.9,
		resilience: 1,
		weight: 1.1,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.PICK, num: 1},
		],
	},
	{
		name: "Farmer's Rake",
		skills: [skills.farming],
		hardness: 1,
		preciousness: 0.8,
		resilience: 1,
		weight: 0.8,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.RAKE, num: 1},
		],
	},
	{
		name: "Butcher's Axe",
		skills: [skills.cooking, skills.combat],
		hardness: 1,
		preciousness: 0.75,
		resilience: 1,
		weight: 1.15,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.AXE, num: 1},
		],
	},
	{
		name: "Woodsman's Axe",
		skills: [skills.combat],
		hardness: 1,
		preciousness: 0.75,
		resilience: 1,
		weight: 0.85,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.AXE, num: 1},
		],
	},
	{
		name: "Guardsman's Spear",
		skills: [skills.combat],
		hardness: 1,
		preciousness: 1.1,
		resilience: 1,
		weight: 0.75,
		components: [
			{type: componentTypes.HANDLE, num: 1},
			{type: componentTypes.SPEAR, num: 1},
		],
	},
	{
		name: "Warrior's Sword",
		skills: [skills.combat],
		hardness: 1,
		preciousness: 0.9,
		resilience: 1,
		weight: 1.1,
		components: [
			{type: componentTypes.HILT, num: 1},
			{type: componentTypes.BLADE, num: 1},
		],
	},
];
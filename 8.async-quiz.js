function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
	return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
	return Promise.resolve(`🪴 => 🐓`);
}

async function makeFriedEgg() {
	let chicken;
	try {
		chicken = await getChicken();
	} catch {
		chicken = '🐓';
	}
	const egg = await fetchEgg(chicken);
	return fryEgg(egg);
}

makeFriedEgg().then(console.log);

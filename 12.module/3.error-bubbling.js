// Bubbling up, Propagating
function a() {
	throw new Error('error!');
}

function b() {
	a();
}

try {
	c();
} catch (error) {
	console.log('Catched!');
}

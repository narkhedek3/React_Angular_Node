function runApp() {
	// without object
	let brandName = 'Honda';
	let modelName = 'City';
	let releaseYear = 2002;

	function displayCarinfo() {
		console.log(`${brandName} ${modelName} - ${releaseYear}`);
	}

	 displayCarinfo();


	// object
	const car = {
		brandName: 'Honda',
		modelName: 'City',
		releaseYear: 2002,
		displayCarinfo : function() {
			console.log(`${this.brandName} ${this.modelName} - ${this.releaseYear}`);
		},
		getThis : function() {
			return this;
		}
	}

	 car.displayCarinfo();
	 car['displayCarinfo']();

	 console.log(car.getThis() === car);

	 // only for [''] not for .
	 let dataMember = 'brandName';
	 console.log(car[dataMember]);
}

runApp();
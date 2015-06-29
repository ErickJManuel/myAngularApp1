<!--
// This file includes the application Angular JS logic for the webpage
// It is good practice to wrap the entire Angular app in a closure so this first line [and the })(); line] does that
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	/*-----------------------------------------------------------------------------
	 * below code is for a single gem, now we are going to change this to an array
	 * var gem = {
	 *		name: 'Dodecahedron',
	 *		price: 2.95,
	 *		description: '...',
	 *		canPurchase: true,
	 *		soldOut: true,
	 * }
	 *--------------------------------------------------------------------------*/

	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "...",
			canPurchase: true,
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "...",
			canPurchase: false,
		}
	];
})();
//-->
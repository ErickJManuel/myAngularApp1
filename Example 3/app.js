<!--
// This file includes the application Angular JS logic for the webpage
// It is good practice to wrap the entire Angular app in a closure so this first line [and the })(); line] does that
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
	}
})();
//-->
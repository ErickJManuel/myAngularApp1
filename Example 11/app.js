<!--
// This file includes the application Angular JS logic for the webpage
// It is good practice to wrap the entire Angular app in a closure so this first line [and the })(); line] does that
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});


	// Below logic to move review from the html and create a controller for it, since when we were using it, it was undefined
	// Will now make the review logic a controller

	app.controller("ReviewController", function(){
		// THe below logic is initializing review to an empty object
		this.review = {};

		// The below logic is creating the function used in ng-submit, which will take this product and push the review into it's reviews array
		this.addReview = function(product) {
			product.reviews.push(this.review);

			// If we leave out the below code, the form does not get cleared out so it looks like we have duplicate reviews in the live preview pane
			// The below piece of logic will clear out the review form which will make it reset
			this.review = {};
		};

	});

	// Below logic is to create a custom directive for our <product-title> being used in the html
	// notice that the - in our directive is translated into camelCase in our javascript
	app.directive('productTitle', function(){
		return{
			//A configuration object defining how your directive will work
			restrict: 'E', // type of directive, in this case "E"lement
			templateUrl: 'product-title.html' // URL of a template that we want loaded in
		};
	});

	// Below logic is a sample of how to code an attribute directive
	app.directive('productTitleAtt', function(){
		return {
			restrict: 'A',  // type of directive, in this case "A"ttribute
			templateUrl: 'product-title.html'
		};
	});

	/* below controller will be moved into the product panels directive so commenting out
	app.controller("PanelController", function(){
		//Below code is for initialization of the tabs to the first tab
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	*/

	// product panels directive uses the PanelController controller.  We need to move the controller into the productPanels directive
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller:function(){	// this section is the former app.controller("PanelController") logic
				//Below code is for initialization of the tabs to the first tab
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panels' // this section replaces the PanelController as panels section of code in the html
		};
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
			name: 'Azurite',
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			shine: 8,
			price: 110.50,
			rarity: 7,
			color: '#CCC',
			faces: 14,

			images: [
				"images/gem-02.gif",
				"images/gem-05.gif",
				"images/gem-09.gif"
			],

			reviews: [
				{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					createdOn: 1397490980837
				}
			]
		},
		{
			name: 'Bloodstone',
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			price: 22.90,
			rarity: 6,
			color: '#EEE',
			faces: 12,

			images: [
				"images/gem-01.gif",
				"images/gem-03.gif",
				"images/gem-04.gif",
			],

			reviews: [
				{
					stars: 3,
					body: "I think this gem was just OK, could honestly use more shine, IMO.",
					author: "JimmyDean@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 4,
					body: "Any gem with 12 faces is for me!",
					author: "gemsRock@example.org",
					createdOn: 1397490980837
				}
			]
		},
		{
			name: 'Zircon',
			description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
			shine: 70,
			price: 1100,
			rarity: 2,
			color: '#000',
			faces: 6,

			images: [
				"images/gem-06.gif",
				"images/gem-07.gif",
				"images/gem-09.gif"
			],

			reviews: [
				{
					stars: 1,
					body: "This gem is WAY too expensive for its rarity value.",
					author: "turtleguyy@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "BBW: High Shine != High Quality.",
					author: "LouisW407@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "Don't waste your rubles!",
					author: "nat@example.org",
					createdOn: 1397490980837
				}
			]
		}
	];
})();
//-->

(function() {
  var app = angular.module('gemStore', ['store-directives']);

  /*
  // We are going to use dependency injection here to get the gems information from a JSON object so below code is going to change
  app.controller('StoreController', function(){
    this.products = gems;
  });
  */

  app.controller('StoreController', ['$http', function($http){
    // in order to access this inside the $http call, we assign it to a variable
    var store = this;

    // since our webpage renders BEFORE our $http request, we want to make sure we initialize products
    store.products = [ ];

    // $http returns a promise, so success() gets the data from $http
    $http.get('/products.json').success(function(data){
      /*
      ??? = data; // We can't assign data to this since this is now referencing $http instead of the controller
      */

      // Since we saved this into a variable, we can use that variable inside this call to assign the data to the correct variable
      store.products = data;
    });
  }]);

  /*
    Additional $http functionality post(), put(), and delete(): Examples below
    $http.post('/path/to/resource.json', {param: 'value'});
    $http.delete('/path/to/resource.json');

    You can also use any other HTTP method by using a config object
    $http({ method: 'OPTIONS', url: '/path/to/resource.json'});
    $http({ method: 'PATCH', url: '/path/to/resource.json'});
    $http({ method: 'TRACE', url: '/path/to/resource.json'});
  */

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

  app.directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function(){
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function(){
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function(){
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab){
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab){
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function(){
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

  /* We want to use $http service to get the below information from a JSON object so commenting this out
  var gems = [{
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
      reviews: []
    }, {
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
      reviews: []
    }, {
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
        "images/gem-08.gif"
      ],
      reviews: []
    }];
  */
})();

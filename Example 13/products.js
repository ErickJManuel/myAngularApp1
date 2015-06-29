<!--
// This angular module only deals with product information
function(){
  var app = angular.module('store-products', []);

  // Below logic is to create a custom directive for our <product-title> being used in the html
  // notice that the - in our directive is translated into camelCase in our javascript
  app.directive('productTitle', function(){
    return{
      //A configuration object defining how your directive will work
      restrict: 'E', // type of directive, in this case "E"lement
      templateUrl: 'product-title.html' // URL of a template that we want loaded in
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  // product panels directive uses the PanelController controller.  We need to move the controller into the productPanels directive
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){  // this section is the former app.controller("PanelController") logic
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
}();
//-->

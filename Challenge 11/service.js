<!--
// Below code is a sample of dependency injection, injecting the $http service into our controller
app.controller('SomeController', ['$http', function($http) {
	
}]);

// Sample multiple dependency injection
app.controller('SomeController', ['$http', '$log', function($http, $log){

}]);
//-->
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope','$http',
	function($scope, $http) {
		console.log("Hello from controller");
		$scope.list = ['dogs','cats','birds','horses'];
		$scope.myname = "Seth";
}]);

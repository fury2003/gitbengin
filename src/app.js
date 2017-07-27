// Defines that JavaScript code should be executed in "strict mode".
"user strict";

//tao module
angular.module('myApp',[]);

// add controller into module
angular.module('myApp').controller('MainController',['$scope',function($scope){
	$scope.message = 'Hello';
	$scope.sayHello = function(name){
		return $scope.message + ' ' + name + '.';
	}

	var items = ['banans','apples', 'pears', 'cherries', 'peaches'];
	$scope.itemIndex = null;
	$scope.currentItem = '';

	$scope.getItem = function(){
		$scope.currentItem = items[$scope.itemIndex];
	}
}]);


angular.module('myApp').controller('ParentController',['$scope',function($scope){
		$scope.model = {
			name : 'John Smith'
		};
}]);

angular.module('myApp').controller('ChildController',['$scope',function($scope){
}]);

angular.module('myApp').controller('IndieController',['$scope',function($scope){
		$scope.model = {
			name : 'Finnick Jasper'
		};
}]);




angular.module('myApp').service('ShareService',function(){
	return {name : 'Bill John'};
});


angular.module('myApp').controller('FirstController',['$scope','ShareService',function($scope,ShareService){
		$scope.model = ShareService;
}]);

angular.module('myApp').controller('SecondController',['$scope','ShareService',function($scope,ShareService){
		$scope.model = ShareService;
}]);
(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.string = '';
		$scope.msg = '';
		$scope.sayMessage = function(){
			if($scope.string != ""){
				$scope.items = $scope.string.split(',');
				if($scope.items.length <= 3){
					$scope.msg = 'Enjoy!';
				}
				if($scope.items.length > 3){
					$scope.msg = 'Too much!';
				}
			}else{
				$scope.msg = "Please enter data first";
			}
		};
	};

})();
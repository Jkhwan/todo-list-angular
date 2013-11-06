var todoApp = angular.module("todoApp", []);

todoApp.controller('todoController', function todoController($scope) {
	$scope.items = [{ name: 'Photo Gallery', completed: 0}, 
									{ name: 'To Do List', completed: 0}, 
									{ name: 'Contacts List', completed: 0}];
	$scope.icons = "fa fa-fw fa-square-o";
	$scope.saveItem = function() {
		if($scope.addText != "") {
			$scope.items.push({name: $scope.addText, completed: 0});
			$scope.addText = "";
		}
	};
	$scope.removeItem = function() {
		var index = findIndex(this.item);
		if (index > -1) {
			$scope.items.splice(index, 1);
		}
	};
	
	$scope.pickIcon = function() {
		var index = findIndex(this.item);
		if (index > -1) {
			if ($scope.items[index].completed == 0) {
				return "fa fa-fw fa-square-o";
			} else {
				return "fa fa-fw fa-check-square-o";
			}
		}	
	};
	$scope.setCompletion = function() {
		if (checkCompletion(this.item) === 1)
			this.item.completed = 0;
		else
			this.item.completed = 1;
	};
	$scope.isCompleted = function() {
		if (checkCompletion(this.item) === 1)
			return "completed";
	};
	var checkCompletion = function(item) {
		var index = findIndex(item);
		if (index > -1) {	
			if ($scope.items[index].completed == 1)
				return 1;
			else
				return 0;
		}		
	};
	var findIndex = function(item) {
		return $scope.items.indexOf(item);
	};
});
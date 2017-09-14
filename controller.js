angular.module("ToDo",[ ]).controller('TaskCtrl', function ($scope) {
	$scope.tasks = []; 

	$scope.addTask = function () {
		var pushTask = {
			"taskName" : $scope.taskName,
			"subTask" : [],
			"favorit" : false
		}
		$scope.tasks.push(pushTask);
	}

	$scope.deleteTask = function(index) {
		$scope.tasks.splice(index,1);
	}

	$scope.addSubTask = function (index, SubTaskName) {
		if($scope.tasks[index].subTask.length < 3)
		{
			$scope.tasks[index].subTask.push(SubTaskName);
		}else{
			alert('Nombre de sous tache max atteint');
		}

	}

	$scope.deleteSubTask = function(index,id) {
		$scope.tasks[id].subTask.splice(index,1);
	}

	$scope.deleteAllTask = function () {
		$scope.tasks = [];
	}

	$scope.isFavorit = function (index) {
		if($scope.tasks[index].favorit===false){
			$scope.tasks[index].favorit=true;

		}else{
			$scope.tasks[index].favorit=false;
		}
	}




}

);
 			

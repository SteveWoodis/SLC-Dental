var app = angular.module('drawWorksApp');
app.controller('gcbidsCtrl',function($scope, envService, projectsRef,$firebaseArray){



$scope.createProjects = function(){
		$scope.projects.$add({
			username: $scope.User.reg_username,
			title: $scope.title
		})
        $scope.title = '';
	}

})
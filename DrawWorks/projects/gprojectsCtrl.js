var app = angular.module('drawWorksApp');
app.controller('gprojectsCtrl', function($scope, projectsRef, $firebaseArray, envService){
    var username;
    var User = envService.getUser();
    User.$loaded(function(data){
        
    }); 
    $scope.User = User;
    
	$scope.projects = $firebaseArray(projectsRef);
	$scope.projects.$loaded().then(function (projects) {
    });

	$scope.createProjects = function(){
		$scope.projects.$add({
			username: $scope.User.reg_username,
			title: $scope.title
		})
        $scope.title = '';
	}
})
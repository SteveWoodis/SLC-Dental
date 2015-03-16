var app = angular.module('drawWorksApp');
app.factory('projectService', function(envService, $firebaseObject){
	var firebaseUrl = "https://drawworks.firebaseio.com";

	return {

			getProjects: function(){
				return new Firebase('https://drawworks.firebaseio.com' + '/projects');
			},
			getProject: function(threadId){
				return new Firebase(firebaseUrl + '/gprojects/' + threadId);
			},
			getComments: function(threadId){
				return new Firebase(firebaseUrl + '/gprojects/' + threadId + '/comment');
			}
	}
})



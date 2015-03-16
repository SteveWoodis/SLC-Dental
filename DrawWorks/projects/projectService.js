var app = angular.module('drawWorksApp');
app.factory('projectservice', function(envService, $firebaseObject){
	var firebaseUrl = "https://drawworks.firebaseio.com";

	return {

			getprojects: function(){
				return new Firebase('https://drawworks.firebaseio.com' + '/projects');
			},
			getThread: function(threadId){
				return new Firebase(firebaseUrl + '/projects/' + threadId);
			},
			getComments: function(threadId){
				return new Firebase(firebaseUrl + '/projects/' + threadId + '/comment');
			}
	}
})


//var ref = new Firebase("https://drawworks.firebaseio.com");
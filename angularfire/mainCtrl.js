var app = angular.module('angularFire');
app.controller('mainCtrl', function($scope, $firebase){
var firebaseUrl = 'https://stevetest1.firebaseio.com/';
var ref = new Firebase(firebaseUrl + "friends");  
var sync = $firebase(ref);
$scope.friends = sync.$asArray();

$scope.addFriend = function(newFriend){
	$scope.friends.$add(newFriend);
	$scope.newFriend = '';
}

$scope.updateFriend = function(goober){

	$scope.friends.$save(goober);
}


$scope.removeFriend = function(goober{
	$scope.friends.$remove(goober);
}
})
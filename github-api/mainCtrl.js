var app = angular.module('gitApp');

app.controller('mainCtrl', function($scope, gitService){
    
 $scope.getUserData = function(){
       gitService.getUser($scope.searchText).then(function(data){
        $scope.user = data.data.data;   
       });
    }
    
});
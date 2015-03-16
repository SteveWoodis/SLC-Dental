angular.module('promise').controller('mainController',function($source,$cookieStore, $http){
    movieGetter.getMovie('water world').then(function(response){
    $scope.movie = response.data;
    })
});
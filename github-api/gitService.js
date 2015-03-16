var app = angular.module('gitApp');

app.service('gitService', function($http, $q){
    var id = "3257a93c96b37cf80ae9";
    var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
    var param = "?client_id=" + id + "&client_secret=" + sec;
    
    this.getUser = function(name){
        var deferred = $q.defer();
            $http.jsonp('https://api.github.com/users/' + name + param + '&callback=JSON_CALLBACK').then(function(res){
      deferred.resolve(res); 
    });
    return deferred.promise;
}
});
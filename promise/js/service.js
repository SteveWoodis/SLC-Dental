angular.module('promise').factory('movieGetter', function($http){
return{
    getMovie: function(title){
     return $http.get('http://omdbapi.com/?t=' + title  + '&y=&plot=short&r=json');   
    }

}
});
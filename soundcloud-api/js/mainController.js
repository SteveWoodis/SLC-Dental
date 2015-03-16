angular.module('sounder').controller('mainController', function($scope,$sce, soundService){

	$scope.getUser = function(){
	soundService.getUser($scope.searchText).then(function(response){
		$scope.userData = response.data
	})
	
	}	
	$scope.getUser();
	$scope.play = function(track_url){
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });

	}
	
})
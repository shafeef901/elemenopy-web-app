angular.module('feedbackApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])

  .controller('feedbackController', function($scope, $http, $interval, $cookies) {
  	var dataRef = firebase.database().ref("form_data/");

		dataRef.on('value', function(snapshot){
				$scope.data = snapshot.val();
				console.log($scope.data)
		});
  	
  })
angular.module('homeApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])

  .controller('formCtrl', function($scope, $http, $interval, $cookies) {

  	$scope.errMsg = null;

  	var dataRef = firebase.database().ref().child('form_data');
 
  	$scope.clicked = function(){
			console.log($scope.contactForm);
	  		var form_data = {
	  			"p_name": $scope.p_name,
	  			"c_name": $scope.c_name,
	  			"c_age": $scope.c_age,
	  			"mob": $scope.mob,
	  			"email": $scope.email
	  		}
	  		console.log(form_data)
	  		dataRef.push({
	  			p_name: $scope.p_name,
	  			c_name: $scope.c_name,
	  			c_age: $scope.c_age,
	  			mob: $scope.mob,
	  			email: $scope.email,
	  		});

	  		$scope.p_name="";$scope.c_name="";$scope.c_age="";$scope.mob="";$scope.email="";

			alert("Your details have been submitted. Thank You! :)")
  	}
  })
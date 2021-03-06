angular.module('homeApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])

  .controller('formCtrl', function($scope, $http, $interval, $cookies) {

  	$scope.errMsg = null;
  	$scope.see = false;

  	var dataRef = firebase.database().ref().child('form_data');

  	$scope.seeMore = function(){
  		$scope.see = true;
  	}
 
  	$scope.clicked = function(){
  			if(($scope.mob + "").length<10){
  				alert("Please enter a valid 10 digit mobile number")
  			}
	  		var form_data = {
	  			"p_name": $scope.p_name,
	  			"c_name": $scope.c_name,
	  			"c_age": $scope.c_age,
	  			"mob": $scope.mob,
				"email": $scope.email,
				"date": new Date()
	  		}
	  		var d = new Date()
	  		var date = d.toDateString()
	  		console.log(date)
	  		
	  		dataRef.push({
	  			p_name: $scope.p_name,
	  			c_name: $scope.c_name,
	  			c_age: $scope.c_age,
	  			date: date,
	  			mob: $scope.mob,
				email: $scope.email,
				
	  		});

	  		$scope.p_name="";$scope.c_name="";$scope.c_age="";$scope.mob="";$scope.email="";

			alert("Your details have been submitted. Thank You! :)")
  	}
  })
angular.module('homeApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])

  .controller('formCtrl', function($scope, $http, $interval, $cookies) {

  	var x = 9;
  	x+=1;
  	console.log(x);
  })
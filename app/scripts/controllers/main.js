'use strict';

/**
 * @ngdoc function
 * @name jarmarockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jarmarockApp
 */
angular.module('jarmarockApp')
  .controller('MainCtrl', function (Facebook, $scope) {
  	/*Facebook.api('/oauth/access_token?client_id=291288937551399&client_secret=eb66d53f25a45e21e0d8d91959e76320', function (response) {
  		debugger;*/
  		Facebook.api('/312125182138194/feed?access_token=291288937551399|eb66d53f25a45e21e0d8d91959e76320', function (response) {
	    	console.log(response);
	    	$scope.news=response.data;
	    });
  	/*})*/
  });

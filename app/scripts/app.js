'use strict';

/**
 * @ngdoc overview
 * @name jarmarockApp
 * @description
 * # jarmarockApp
 *
 * Main module of the application.
 */
angular
  .module('jarmarockApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'facebook'
  ])
  .config(function(FacebookProvider) {
     FacebookProvider.init('291288937551399');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

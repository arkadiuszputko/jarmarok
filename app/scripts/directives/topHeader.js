'use strict';


angular.module('jarmarockApp')
    .directive('topHeader', function () {
      return {
        templateUrl: 'views/header.html',
        restrict: 'E',
        scope: {},
        controller: function ($scope, $http) {
            $http.get('https://foaas.com/operations').then(function(response){
              $scope.myData = response.data;
            })
          }
        };
    });
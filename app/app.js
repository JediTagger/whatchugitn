var app = angular.module("WhatChuGitN", ['angular.filter', 'ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/which.html',
        controller: 'GitNCtrl'
      }).otherwise({
        redirectTo: '/main'
      });
  }]);
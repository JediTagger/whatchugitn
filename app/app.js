define(function(require) {
  var angular = require("angular");
  var app = angular.module("WhatChuGitN", ['angular.filter', 'ngRoute', 'firebase']);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/which', {
          templateUrl: './partials/which.html',
          controller: 'GitNCtrl'
        }).otherwise({
          redirectTo: '/which'
        });
  }]);
});
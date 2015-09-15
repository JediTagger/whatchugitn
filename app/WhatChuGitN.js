define(function(require) {
  var angular = require("angular");
  var route = require("angularRoute");
  var filter = require("angularFilter");
  var firebase = require("firebase");

  return angular
    .module(
      "WhatChuGitNapp",
      [
        "ngRoute", 
        "firebase", 
        "angularFilter"
      ]
    )
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.
        when('/which', {
          templateUrl: '.partials/which.html',
          controller: 'GitNCtrl'
        }).otherwise({ 
          redirectTo: "/" 
        });
    }]);
});
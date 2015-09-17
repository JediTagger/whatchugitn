define(function(require) {
  var angular = require("angular");

  angular
    .module("WhatChuGitNapp.WhichCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/which", {
        templateUrl: "partials/which.html",
        controller: "WhichCtrl"
      });
    }])

    .controller("WhichCtrl", ["$scope",
      function($scope) {
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");

          
        $scope.name = ref.getAuth().facebook.displayName;
        $scope.profileImage = ref.getAuth().facebook.profileImageURL;

      }
    ]);
});
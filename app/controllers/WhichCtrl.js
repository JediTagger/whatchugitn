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
    .controller("WhichCtrl", ["$scope", "$firebaseArray", "$firebaseObject",
      function($scope, $firebaseArray, $firebaseObject) {
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");
        //get the user name and picture from Facebook
        $scope.name = ref.getAuth().facebook.displayName;
        $scope.profileImageURL = ref.getAuth().facebook.profileImageURL;

        var userID = ref.getAuth().facebook.id;

        var memberRef = new Firebase("https://whatchugitn.firebaseio.com/Turner/Members/" + userID);
        memberRef.child('profile_image_url').set($scope.profileImageURL);

      }
    ]);
});
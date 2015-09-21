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
        //get a firebase reference for the app
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");
        //get the user name and picture from Facebook
        $scope.name = ref.getAuth().facebook.displayName;
        $scope.profileImageURL = ref.getAuth().facebook.profileImageURL;
        var userID = ref.getAuth().facebook.id;
        //get a firebase reference for the family
        var familyRef = new Firebase("https://whatchugitn.firebaseio.com/family/" + userID);
        //save the user's information to firebase for use when others log in
        familyRef.child('profile_image_url').set($scope.profileImageURL);
        familyRef.child('name').set($scope.name);
        familyRef.child('userID').set(userID);
      }
    ]);
});
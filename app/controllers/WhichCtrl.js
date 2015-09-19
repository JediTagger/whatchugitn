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
        //get a firebase reference for the members
        var memberRef = new Firebase("https://whatchugitn.firebaseio.com/Turner/Members/" + userID);
        //save the user's name and profile image url to firebase for use when others log in
        memberRef.child('profile_image_url').set($scope.profileImageURL);
        memberRef.child('name').set($scope.name);
      }
    ]);
});
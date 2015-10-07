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
    .controller("WhichCtrl", ["$scope", "$location",
      function($scope, $location) {
        //get a firebase reference for the app
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");
        //get the user's information from Facebook
        $scope.name = ref.getAuth().facebook.displayName;
        $scope.profileImageURL = ref.getAuth().facebook.profileImageURL;
        var userID = ref.getAuth().facebook.id;
        //get a Firebase reference for the user
        var userRef = new Firebase("https://whatchugitn.firebaseio.com/family/" + userID);
        //save the user's information to Firebase for use when others log in
        userRef.child('profile_image_url').set($scope.profileImageURL);
        userRef.child('name').set($scope.name);
        userRef.child('userID').set(userID);

        $scope.logOut = function() {
          //get a Firebase reference for the app
          var ref = new Firebase("https://whatchugitn.firebaseio.com");
          //log out and redirect to "which" page
          ref.unauth();
          $location.path("/");
        };//end logOut function

      }//end main function
    ]);//end controller
});//end require
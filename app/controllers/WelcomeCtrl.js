define(function(require) {
  var angular = require("angular");
  var firebase = require("firebase");

  angular
    .module("WhatChuGitNapp.WelcomeCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "partials/welcome.html",
        controller: "WelcomeCtrl"
      });
    }])
    .controller("WelcomeCtrl", ["$scope", "$location",
      function($scope, $location) {

        $scope.logIn = function() {
          //get a Firebase reference for the app
          var ref = new Firebase("https://whatchugitn.firebaseio.com");

          if (!!ref.getAuth()) {
            $location.path("/which");
            $scope.$apply();
          } else {
            //log in and redirect to "which" page
            ref.authWithOAuthPopup("facebook", function(error) {
              if (error) {
                console.log("Login Failed!", error);
              } else {
                $location.path("/which");
                $scope.$apply();
              }
            });
          }
        };//end logIn function

      }//end main function
    ]);//end controller
});//end require
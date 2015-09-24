define(function(require) {
  var angular = require("angular");
  var firebase = require("firebase");
  var angularFire = require("angularFire");
  var q = require("q");

  angular
    .module("WhatChuGitNapp.WhatChuGitNCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/gitn/:userID", {
        templateUrl: "partials/gitn.html",
        controller: "WhatChuGitNCtrl"
      });
    }])
    .controller("WhatChuGitNCtrl", ["$scope", "$firebaseArray", "$routeParams",
      function($scope, $firebaseArray, $routeParams) {
        //declare variables
        $scope.memberThingsArray = [];
        //get a Firebase reference for the things the family member wants
        var memberThingsRef = new Firebase("https://whatchugitn.firebaseio.com/things")
              .orderByChild("wanted_by")
              .equalTo($routeParams.userID);
        //make an array of the things the family member wants
        $scope.memberThingsArray = $firebaseArray(memberThingsRef);
        //get a general Firebase reference to get user's information
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");
        $scope.userID = ref.getAuth().facebook.id;
        var userDisplayName = ref.getAuth().facebook.displayName;
        var userProfileImageURL = ref.getAuth().facebook.profileImageURL;
        //commit to getting a thing for the family member
        $scope.gitnit = function(thing) {
          var memberThingRef = new Firebase("https://whatchugitn.firebaseio.com/things/" + thing.$id);
          memberThingRef.child('gitnit_id').set($scope.userID);
          memberThingRef.child('gitnit_name').set(userDisplayName);
          memberThingRef.child('gitnit_profile_image_url').set(userProfileImageURL);
        };
        //remove committment for getting a thing
        $scope.oops = function(thing) {
          var memberThingRef = new Firebase("https://whatchugitn.firebaseio.com/things/" + thing.$id);
          memberThingRef.child('gitnit_id').set("");
          memberThingRef.child('gitnit_name').set("");
          memberThingRef.child('gitnit_profile_image_url').set("");
        };
      }//end main function
    ]);//end controller
});//end require
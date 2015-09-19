define(function(require) {
  var angular = require("angular");
  var firebase = require("firebase");
  var angularFire = require("angularFire");
  var q = require("q");

  angular
    .module("WhatChuGitNapp.WhatChuGitNCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/gitn", {
        templateUrl: "partials/gitn.html",
        controller: "WhatChuGitNCtrl"
      });
    }])
    .controller("WhatChuGitNCtrl", ["$scope", "$firebaseArray",
      function($scope, $firebaseArray) {
        $scope.userThings = [];

        //get this from the factory or somewhere
        var userID = "123";
        
        $scope.whosGitnIt = "";

        //if getting_it === "" show gitnit button
        //else show Members.getting_it.profile_image_url is gitnit

        var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner")
              .orderByChild("wanted_by")
              .equalTo(userID);
        //make an array of the things this user wants
        $scope.userThings = $firebaseArray(ref);

        $scope.gitn = function(thing) {
          var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner/Members/");
          var userID = ref.getAuth().facebook.id;
          var memberThing = new Firebase("https://whatchugitn.firebaseio.com/Turner/" + thing.$id);
          memberThing.child('getting_it').set(userID);
          // then change button to Members.getting_it.profile_image_url is gitnit
        };//end gitin function

      }//end main function
    ]);//end controller
});//end require
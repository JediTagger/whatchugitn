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
    .factory('storage', function () {
      var userID = "123";
      return {
        addUserID: function(value) {
          userID = value;
        },
        getUserID: function() {
          return userID;
        }
      };
    })
    .controller("WhatChuGitNCtrl", ["$scope", "$firebaseArray", "storage",
      function($scope, $firebaseArray, storage) {
        $scope.userThings = [];

        var userID = storage.getUserID();
        
        $scope.whosGitnIt = "";

        //if getting_it === "" show gitnit button
        //else show "Members.getting_it.profile_image_url" is gitnit

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

        console.log("userID is: ", userID);


      }//end main function
    ]);//end controller
});//end require
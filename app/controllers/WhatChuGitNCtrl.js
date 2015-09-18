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
    .controller("WhatChuGitNCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "$q",
      function($scope, $firebaseArray, $firebaseObject, $q) {

        $scope.displayMembers = [];

        function getMembers() {
          return $q(function(resolve, reject) {
            $.ajax({
              url: "https://whatchugitn.firebaseio.com/Turner/Members/.json"
            })
            .done(function(response) {
              resolve(response);
            })
            .fail(function(xhr, status, error) {
              reject(error);
            });
          });//promise resolution
        }//end getMemebers function

        getMembers()
          .then(function(promiseResolutionData) {
            $scope.displayMembers = promiseResolutionData;
          },function(error) {
            console.log("error is: ", error);
          });

      }//end main function
    ]);//end controller
});//end require

        //This didn't work and Steve doens't know why.  It's they way he would have written it.
        //get a firebase reference
        // var memberRef = new Firebase("https://whatchugitn.firebaseio.com/Turner/Members");
        // var userID = memberRef.getAuth().facebook.id;

        // memberRef.on("value", function(snapshot) {
        //   var members = snapshot.val();

        //   $scope.displayMembers = [];

        //   for (var key in members) {
        //     if (key !== userID) {
        //       $scope.displayMembers.push(members[key].profile_image_url);
        //     }
        //   }
        //   console.log($scope.displayMembers);
        // });
define(function(require) {
  var angular = require("angular");
  var firebase = require("firebase");
  var q = require("q");

  angular
    .module("WhatChuGitNapp.WhatChuGitNWhoCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/who", {
        templateUrl: "partials/who.html",
        controller: "WhatChuGitNWhoCtrl"
      });
    }])
    .controller("WhatChuGitNWhoCtrl", ["$scope", "$q", "$firebaseArray",
      function($scope, $q, $firebaseArray) {
        // get a firebase reference 
        var ref = new Firebase("https://whatchugitn.firebaseio.com");
        //declare variables
        $scope.myUserID = ref.getAuth().facebook.id;
        $scope.displayMembers = [];
        // return a promise of all family members
        function getFamily() {
          return $q(function(resolve, reject) {
            $.ajax({
              url: "https://whatchugitn.firebaseio.com/family/.json"
            })
            .done(function(response) {
              resolve(response);
            })
            .fail(function(xhr, status, error) {
              reject(error);
            });
          });//promise resolution
        }//end getFamily function
        //call the function & filter out the user so they can't see what they're gitn!
        getFamily()
          .then(function(data) {
            for (var key in data) {
              if (key !== $scope.myUserID) {
                $scope.displayMembers.push(data[key]);
              }
            }
          },function(error) {
            console.log("error is: ", error);
          });
        //return a promise of all things
        function getThings() {
          return $q(function(resolve, reject) {
            $.ajax({
              url: "https://whatchugitn.firebaseio.com/things/.json"
            })
            .done(function(response) {
              resolve(response);
            })
            .fail(function(xhr, status, error) {
              reject(error);
            });
          });//promise resolution
        }//end getThings function
        //call the function and add a "check" property to the members for whom
        //I've committed to getting something.
        getThings()
          .then(function(data) {
            for (var key in data) {
              if (data[key].gitnit_id === $scope.myUserID) {
                for (var i = 0; i < $scope.displayMembers.length; i++) {
                  if ($scope.displayMembers[i].userID === data[key].wanted_by) {
                    $scope.displayMembers[i].check = true; 
                  } 
                }
              }
            }
          },function(error) {
            console.log("error is: ", error);
          });

      }//end main function
    ]);//end controller
});//end require







        //This didn't work and Steve doesn't know why.  It's the way he would have written it.
        //so instead I did a promise.
        //
        // var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner/Members");
        // var userID = ref.getAuth().facebook.id;
        // $scope.displayMembers = [];
        // ref.on("value", function(snapshot) {
        //   var members = snapshot.val();
        //   for (var key in members) {
        //     if (key !== userID) {
        //       $scope.displayMembers.push(members[key]);
        //     }
        //   }
        // });
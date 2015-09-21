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
    .controller("WhatChuGitNWhoCtrl", ["$scope", "$q", "storage",
      function($scope, $q, storage) {
        //let the dom access the storage factory
        $scope.addMemberID = function(id) {
          storage.addMemberID(id);
        };
        // get a firebase reference 
        var ref = new Firebase("https://whatchugitn.firebaseio.com");
        //declare variables
        var userID = ref.getAuth().facebook.id;
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
        }//end getMemebers function
        //call the function & filter out the user so they can't see what they're gitn!
        getFamily()
          .then(function(data) {
            for (var key in data) {
              if (key !== userID) {
                $scope.displayMembers.push(data[key]);
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
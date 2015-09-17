define(function(require) {
  var angular = require("angular");
  var firebase = require("firebase");
  var angularFire = require("angularFire");

  angular
    .module("WhatChuGitNapp.WhatChuWantCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/want", {
        templateUrl: "partials/want.html",
        controller: "WhatChuWantCtrl"
      });
    }])

    .controller("WhatChuWantCtrl", ["$scope", "$firebaseArray", "$firebaseObject",
      function($scope, $firebaseArray, $firebaseObject) {
        //get a firebase reference
        var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner");
        //get the user's name from Facebook authentication
        var user = ref.getAuth().facebook.displayName;
        //get only the things that the user wants
        var thingRef = new Firebase("https://whatchugitn.firebaseio.com/Turner")
                      .orderByChild("wanted_by")
                      .equalTo(user);
        //make an array of the things the user wants
        $scope.userThings = $firebaseArray(thingRef);
        //get the name and profile image from Facebook authentication
        $scope.displayName = ref.getAuth().facebook.displayName;
        $scope.profileImage = ref.getAuth().facebook.profileImageURL;
        //declare variables
        $scope.newName = "";
        $scope.newDescription = "";
        $scope.newImage_url = "";
        $scope.newThing_url = "";

        $scope.addNewThing = function() {
          //get the data from the form
          var newThing = {
            name: $scope.newName,
            description: $scope.newDescription,
            image_url: $scope.newImage_url,
            thing_url: $scope.newThing_url,
            wanted_by: user,
            getting_it: ""
          };
          //add the new data to firebase
          $firebaseArray(ref).$add(newThing);
          //reset the form to clear
          $scope.newName = "";
          $scope.newDescription = "";
          $scope.newImage_url = "";
          $scope.newThing_url = "";
        };//end addNewThing function

        $scope.removeThing = function(thing) {
          var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner/" + thing.$id);
          thing = $firebaseObject(ref);
          thing.$remove();
        };//end removeThing function

      }//end main function
    ]);//end controller
});//end define
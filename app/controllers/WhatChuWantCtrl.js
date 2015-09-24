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
        var ref = new Firebase("https://whatchugitn.firebaseio.com/things");
        //get the user's id from Facebook authentication
        var userID = ref.getAuth().facebook.id;
        //get only the things this user wants
        var thingRef = new Firebase("https://whatchugitn.firebaseio.com/things")
                      .orderByChild("wanted_by")
                      .equalTo(userID);
        //make an array of the things this user wants
        $scope.userThings = $firebaseArray(thingRef);
        //get & set the name and profile image from Facebook authentication
        $scope.displayName = ref.getAuth().facebook.displayName;
        $scope.profileImage = ref.getAuth().facebook.profileImageURL;
        //declare variables
        $scope.editedName = "";
        $scope.newName = "";
        $scope.newDescription = "";
        $scope.newImage_url = "";
        $scope.newThing_url = "";
        $scope.showme = false;
        //add an item to the user's wish list
        $scope.addNewThing = function() {
          //get the new data from the form
          var newThing = {
            name: $scope.newName,
            description: $scope.newDescription,
            image_url: $scope.newImage_url,
            thing_url: $scope.newThing_url,
            wanted_by: userID,
            gitnit_id: "",
            gitnit_name: "",
            gitnit_profile_image_url: ""
          };
          //add the new data to firebase
          $firebaseArray(ref).$add(newThing);
          //reset the form to clear
          $scope.newName = "";
          $scope.newDescription = "";
          $scope.newImage_url = "";
          $scope.newThing_url = "";
        };
        //remove an item from the user's wish list
        $scope.removeThing = function(thing) {
          var ref = new Firebase("https://whatchugitn.firebaseio.com/things/" + thing.$id);
          thing = $firebaseObject(ref);
          thing.$remove();
        };
        //edit an item on user's wish list
        $scope.editThing = function(thing) {
          var ref = new Firebase("https://whatchugitn.firebaseio.com/things/" + thing.$id);
          for (var key in thing) {
            if (key === "name") {
              ref.child(key).set(thing.name);
            }else if (key === "description") {
              ref.child(key).set(thing.description);
            }else if (key === "thing_url") {
              ref.child(key).set(thing.thing_url);
            }else if (key === "image_url") {
              ref.child(key).set(thing.image_url);
            }
          }
        };
      }//end main function
    ]);//end controller
});//end require
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

    .controller("WhatChuWantCtrl", ["$scope", "$firebaseArray",
      function($scope, $firebaseArray) {

        var ref = new Firebase("https://whatchugitn.firebaseio.com/Turner");
        var data = $firebaseArray(new Firebase("https://whatchugitn.firebaseio.com/Turner"));
        var user = ref.getAuth().facebook.displayName;

        console.log("firebaseArray", data);

        ref.orderByChild("wanted_by").equalTo(user).on("value", function(snapshot) {
          console.log("just mine object", snapshot.val());
        });

        $scope.name = ref.getAuth().facebook.displayName;

      }
    ]);
});
define(function(require) {
  var angular = require("angular");

  angular
    .module("WhatChuGitNapp.WhatChuWantCtrl", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/what", {
        templateUrl: "partials/what.html",
        controller: "WhatChuWantCtrl"
      });
    }])

    .controller("WhatChuWantCtrl", ["$scope",
      function($scope) {
        var ref = new Firebase("https://whatchugitn.firebaseio.com/");

        $scope.name = ref.getAuth().facebook.displayName;

        console.log("displayName", ref.getAuth().facebook.displayName);

      }
    ]);
});
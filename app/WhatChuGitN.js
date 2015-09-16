define(function(require) {
  var angular = require("angular");
  var route = require("angularRoute");
  var filter = require("angularFilter");
  var firebase = require("firebase");

  return angular
    .module(
      "WhatChuGitNapp",
      [
        "ngRoute", 
        "WhatChuGitNapp.WhichCtrl",
        "WhatChuGitNapp.WhatChuWantCtrl"
      ]
    )
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider
        .when("/what", {
          templateUrl: "partials/what.html",
          controller: "WhatChuWantCtrl"
        })
        .otherwise({ 
          redirectTo: "/which" 
        });
    }]);
});
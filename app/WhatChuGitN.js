define(function(require) {
  var angular = require("angular");
  var route = require("angularRoute");
  var filter = require("angularFilter");
  var firebase = require("firebase");
  var angularFire = require("angularFire");

  return angular
    .module(
      "WhatChuGitNapp",
      [
        "ngRoute",
        "firebase",
        "WhatChuGitNapp.WhichCtrl",
        "WhatChuGitNapp.WhatChuWantCtrl"
      ]
    )
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.otherwise({redirectTo:"/which"});
    }]);
});
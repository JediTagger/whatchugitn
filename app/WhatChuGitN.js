define(function(require) {
  var angular = require("angular");
  var route = require("angularRoute");
  var filter = require("angularFilter");
  var firebase = require("firebase");
  var angularFire = require("angularFire");
  var q = require("q");

  return angular
    .module(
      "WhatChuGitNapp",
      [
        "ngRoute",
        "firebase",
        "WhatChuGitNapp.WhichCtrl",
        "WhatChuGitNapp.WhatChuWantCtrl",
        "WhatChuGitNapp.WhatChuGitNWhoCtrl",
        "WhatChuGitNapp.WhatChuGitNCtrl",
        "WhatChuGitNapp.WelcomeCtrl"
        // "WhatChuGitNapp.storage" no longer needed, keeping as an example
      ]
    )
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.otherwise({redirectTo:"/"});
    }]);
});
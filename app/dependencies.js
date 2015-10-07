define(function(require) {
    var fb = require("firebase");
    var bootstrap = require("bootstrap");
    var auth = require("authentication");
    var angular = require("angular");
    var WhatChuGitN = require("WhatChuGitN");
    var WhichCtrl = require("controllers/WhichCtrl");
    var WhatChuWantCtrl = require("controllers/WhatChuWantCtrl");
    var WhatChuGitNWhoCtrl = require("controllers/WhatChuGitNWhoCtrl");
    var WhatChuGitNCtrl = require("controllers/WhatChuGitNCtrl");
    var WelcomeCtrl = require("controllers/WelcomeCtrl");
    var angularFire = require("angularFire");
    var q = require("q");
    var jquery = require("jquery");
    // var storage = require("factories/storage"); no longer needed, keeping as an example

    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      angular.bootstrap(document, ['WhatChuGitNapp']);
    });
  }
);
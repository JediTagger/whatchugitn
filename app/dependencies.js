define(function(require) {
    var fb = require("firebase");
    var bootstrap = require("bootstrap");
    var auth = require("authentication");
    var angular = require("angular");
    var WhatChuGitN = require("WhatChuGitN");
    var WhichCtrl = require("controllers/WhichCtrl");
    var WhatChuWantCtrl = require("controllers/WhatChuWantCtrl");
    var angularFire = require("angularFire");

    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      angular.bootstrap(document, ['WhatChuGitNapp']);
    });
  }
);
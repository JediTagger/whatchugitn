define(function(require) {
    var fb = require("firebase");
    var bootstrap = require("bootstrap");
    var auth = require("authentication");
    var WhatChuGitN = require("WhatChuGitN");

    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      angular.bootstrap(document, ['WhatChuGitNapp']);
    });
  }
);
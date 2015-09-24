//no longer using this, keeping as an example
define(function(require) {
  var angular = require("angular");

  angular
  .module("WhatChuGitNapp.storage", [])
  .factory('storage', function($location) {
    var memberID = "";
    return {
      addMemberID: function(value) {
        memberID = value;
        $location.url("/gitn");
      },
      getMemberID: function() {
        return memberID;
      }
    };
  });
});
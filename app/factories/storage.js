define(function(require) {
  var angular = require("angular");

  angular
  .module("WhatChuGitNapp.storage", [])
  .factory('storage', function() {
    var userID = "";
    return {
      addUserID: function(value) {
        userID = value;
        console.log("userID added");
      },
      getUserID: function() {
        console.log(userID);
      }
    };
  });
});

//example from stackoverflow

// define([
//     'app'
// ],

// function(app) {
//     return app.factory('serviceExample', function ( ) {

//           return {
//               nameOfMethod: function () {
//                   return "Is this working";
//               }
//           }
//         }
//     );
// });
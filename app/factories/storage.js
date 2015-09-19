WhatChuGitNapp.factory("storage", function () {
    var userID = "";

    return {
        addUserID: function(value) {
            userID = value;
        },
        getUserID: function() {
            return userID;
        }
    };
});
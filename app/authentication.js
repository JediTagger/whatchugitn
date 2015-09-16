define(function(require) {
  var firebase = require("firebase");
  var ref = new Firebase("https://whatchugitn.firebaseio.com");

  if (!!ref.getAuth()) {

  } else {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // console.log("Facebook.id", authData.facebook.id);
        // console.log("Facebook.displayName", authData.facebook.displayName);
        // console.log("Facebook.profileImageURL", authData.facebook.profileImageURL);      
      }
    });
  }
});
define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var ref = new Firebase("https://whatchugitn.firebaseio.com");

  ref.authWithOAuthPopup("facebook", function(error) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      // We'll never get here, as the page will redirect on success.
    }
  });
});

  // if (!!ref.getAuth()) {


  // return {
  //   FBlogin: function () {
  //     var deferred = q.defer();

  //     return q(function(resolve, reject) {
  //       ref.authWithOAuthPopup("facebook", function(error, authData) {
  //         if (error) {
  //           console.log("Login Failed!", error);
  //         } else {
  //           console.log("authData", authData);
  //         }
  //       })
  //       .done(function(response) {
  //         resolve(response);
  //       })
  //       .fail(function(xhr, status, error) {
  //         reject(error);
  //       });
  //     return deferred.promise;
  //     });

  //   }
  // };
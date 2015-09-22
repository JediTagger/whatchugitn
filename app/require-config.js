require.config({
  baseUrl: "./app",
  paths: {
    angular: '../lib/bower_components/angular/angular.min',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    jquery: '../lib/bower_components/jquery/dist/jquery.min',
    angularFilter: '../lib/bower_components/angular-filter/dist/angular-filter.min',
    firebase: '../lib/bower_components/firebase/firebase',
    angularFire: '../lib/bower_components/angularfire/dist/angularfire.min',
    q: '../lib/bower_components/q/q',
    oauth: '../lib/bower_components/oauth-js/dist/oauth.min',
    bootstrap: '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'angular': {'exports': 'angular'},
    'angularFilter': ['angular'],
    'angularFire': ['angular', 'firebase'],
    'angularRoute': ['angular'],
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["authentication", "dependencies"],
  function(authentication, deps) {
  }
);

// the way to authenticate first before doing anything else then load the page with pic etc.
// require(
//   ["dependencies", "authentication", "navigation"], 
//   function(deps, authentication, nav) {


//     authentication.github()
//       .then(function() {
//         require(["core_list"], function() {});
//       })
//       .fail(function(error) {
//         console.log("error", error);
//       });

//   }
// );
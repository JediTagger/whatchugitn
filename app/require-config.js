require.config({
  baseUrl: "./app",
  paths: {
    angular: '../lib/bower_components/angular/angular.min',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    jquery: '../lib/bower_components/jquery/dist/jquery.min',
    angularFilter: '../lib/bower_components/angular-filter/dist/angular-filter.min',
    firebase: '../lib/bower_components/firebase/firebase',
    angularFire: '../lib/bower_components/angularfire/dist/angularfire.min'
  },
  shim: {
    'angular': {'exports': 'angular'},
    'angularFilter': ['angular'],
    'angularFire': ['angular'],
    'angularRoute': ['angular'],
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  },
  priority: [
    "angular"
  ],
});

requirejs(
  ["angular", "app"],
  function(angular, app) {
  }
);
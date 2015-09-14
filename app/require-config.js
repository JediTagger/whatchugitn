require.config({

  priority: [
    "angular"
  ],
});

require([
  'angular',
  'app/app'
  ], function(angular, app) {
      var $html = angular.element(document.getElementsByTagName('body')[0]);
      angular.element($html).ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['MusicApp']);
    });
  }
);
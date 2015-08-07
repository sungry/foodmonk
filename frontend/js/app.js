
var app = angular.module('foodMonk', [
    'ngRoute',
    'ngCookies'
])

  .run(function($http, $rootScope, $locaiton, $cookieStore, AuthenticationService) {

    // either create our globals or recover it from our cookie store
    $rootScope.globals = $cookieStore.get('globals') || {};

    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      if (($location.path() !== '/login' && $location.path() !== '/sign-up') && !$rootScope.globals.currentUser) {
        $location.path('/login');
      }
    });
  });



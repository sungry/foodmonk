var signUpCtrl = angular.module('foodMonk.signupCtrl', []);
signUpCtrl.controller('SignUpCtrl', function($scope, $rootScope, $location, AuthenticationService) {
  AuthenticatioService.ClearCredentials();

  $scope.signUp = function() {

    $scope.dataLoading = true;

    AuthenticationService.SignUp($scope.username, $scope.password, function(response) {
      if (response.success) {
        AuthenticationService.SetCredentials($scope.username, $scope.password);
        $location.path('/panel');
      } else {
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  };
});

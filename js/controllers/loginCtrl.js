(function() {
    'use strict';

    angular
        .module('Login')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, $localStorage, AuthService) {
        initCtrl();

       function initCtrl(){
            AuthService.checkLocalStorage($localStorage.currentUser);
        };

        this.title = 'Login';
        $scope.userdata = {
            email: '',
            password: ''
        };

        $scope.username = function() {
            if ($localStorage.currentUser){
                return $localStorage.currentUser.email
            } else {
                return 'Anonymous'
            }
        };

        $scope.logIn = function() {
            AuthService.login($scope.userdata);
            $scope.userdata = {};
        };

        $scope.logOut = function() {
            AuthService.logout();
        };

    }
})();
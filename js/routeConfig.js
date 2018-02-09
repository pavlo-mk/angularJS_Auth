(function(){
    'use strict';

angular
    .module('Route', ['ngRoute'])

    /* routes configs */
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl:'templates/home.html',
                controller:'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl:'templates/login.html',
                controller:'loginCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

})();
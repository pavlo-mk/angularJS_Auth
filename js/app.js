(function(){
    'use strict';

// declare modules
angular.module('Home', []);
angular.module('Login', ['ngStorage']);
angular.module('Route', []);

angular
    .module('app', [
        'Home',
        'Login',
        'Route'
     ])

})();
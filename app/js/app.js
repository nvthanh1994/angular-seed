'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myCtrls',
    'myServices'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/',{
                templateUrl : 'home.html',
                controller : HomeCtrl
            }).
            otherwise({redirectTo: '/'});
    }]);

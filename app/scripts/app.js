'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'chart.js'
  ])
  .config(['$stateProvider',function ($stateProvider) {
        $stateProvider
            .state('home', { // state for showing home
                url:'/home',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', { // state for showing all movies
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });
    }])
    .run(['$state', function ($state) {
        $state.go('home'); //make a transition to movies state when app starts
    }]);


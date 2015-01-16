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
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('organizations', {
        url: '/organizations',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('employees', {
        url: '/employees',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('prospects', {
        url: '/employees',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }])
  .run(['$state', function ($state) {
    $state.go('dashboard'); //make a transition to movies state when app starts
  }]);


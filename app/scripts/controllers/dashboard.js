'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).
  controller('BillableBenchAreaCtrl', ['$scope', function ($scope) {
    $scope.labels = ["Jan-15","Dec-14","Nov-14","Oct-14","Sep-14","Aug-14","Jul-14","Jun-14","May-14","Apr-14","Mar-14","Feb-14","Jan-14"];
    $scope.series = ['Total Head Count', 'Billable Head Count','Bench Head Count','Open Positions'];
    $scope.data = [
      [370, 350, 350, 345, 360, 365, 360,350, 345, 360, 365, 360,330],
      [320, 310, 300, 310, 304, 309, 307,310, 300, 310, 304, 309,320],
      [50, 40, 50, 35, 54, 56, 53,35, 54, 56, 53,51,10],
      [20, 10, 8, 12, 15, 7, 10,20, 10, 8, 12,20,11]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  }]).
  controller('BillableBenchPieCtrl', ['$scope', function ($scope) {
    $scope.labels = ["Billable Head Count", "Bench Head Count"];
    $scope.data = [320, 50];
    

  }]);



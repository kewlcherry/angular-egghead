var app = angular.module('app', []);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'ngview.tmpl.html',
    controller: 'AppCtrl'
  }) 
});

app.controller('AppCtrl', function($scope) {
  $scope.model = {
    message: "This is my app!!!" 
  }
});

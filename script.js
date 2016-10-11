// Code goes here
(function() {
  var app = angular.module("HellowWorldApp", []);

  var HelloWorldCtrl = function($scope) {

    $scope.message = "Hello World";
  };


  app.controller("HelloWorldCtrl", HelloWorldCtrl);

}());
var bookControllers = angular.module('bookControllers', ['ngAnimate']);

bookControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/catalog.json').success(function(data) {
    $scope.books = data;
    $scope.bookOrder = 'name';
  });
}]);

bookControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/catalog.json').success(function(data) {
    $scope.books = data;
    $scope.whichItem = $routeParams.itemId;

  });
}]);


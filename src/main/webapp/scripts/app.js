'use strict';

angular.module('publicadorweb',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Autors',{templateUrl:'views/Autor/search.html',controller:'SearchAutorController'})
      .when('/Autors/new',{templateUrl:'views/Autor/detail.html',controller:'NewAutorController'})
      .when('/Autors/edit/:AutorId',{templateUrl:'views/Autor/detail.html',controller:'EditAutorController'})
      .when('/Publicacaos',{templateUrl:'views/Publicacao/search.html',controller:'SearchPublicacaoController'})
      .when('/Publicacaos/new',{templateUrl:'views/Publicacao/detail.html',controller:'NewPublicacaoController'})
      .when('/Publicacaos/edit/:PublicacaoId',{templateUrl:'views/Publicacao/detail.html',controller:'EditPublicacaoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });

'use strict';

angular.
  module('obpNlApp').
  config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/issues/:issueNo', {
          template: '<issue-page></issue-page>'
        }).
        when('/articles/:articleId', {
          template: '<article-page></article-page>'
        }).
        when('/login', {
          template: '<login-panel></login-panel>'
        }).
        otherwise('/home');
    }
]).run();

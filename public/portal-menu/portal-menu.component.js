'use strict';

angular.module('portalMenu').
  component('portalMenu',{
    templateUrl: 'portal-menu/portal-menu.template.html',
    controller: ['$routeParams','$location','$window','authFactory','$localStorage','$sessionStorage',
      function portalMenuController ($routeParams,$location,$window,authFactory,$localStorage,$sessionStorage) {
        var self = this;

        //self.isLogged = authFactory.isLoggedIn;
        self.$storage = $localStorage;
        self.isLogged = self.$storage.isLoggedIn;    

        self.logout = function() {
          authFactory.isLoggedIn = false;
          self.$storage.isLoggedIn = false;
          delete $window.sessionStorage.token;
          $location.path('/');
        };

        self.isActiveTab = function(url) {
           var currentPath = $location.path().split('/')[1];
           return (url === currentPath ? 'active' : '');
        };
      }
    ]
  });

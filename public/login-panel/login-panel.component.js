'use strict';

angular.module('loginPanel').
  component('loginPanel',{
    templateUrl: 'login-panel/login-panel.template.html',
    controller: ['$routeParams','$location','$window','authFactory','authentication','$localStorage','$sessionStorage',
      function loginPanelController ($routeParams,$location,$window,authFactory,authentication,$localStorage,$sessionStorage) {
        var self = this;

        self.user = {
          name : '',
          password: ''
        };

        self.$storage = $localStorage;
        self.$storage.isLoggedIn = false;

        self.showregister = false;

        // self.checkUserRole = function () {
        //   var user = {
        //     name : self.$storage.user
        //   }
        //   authentication.checkAdminUser(user).then(function(response) {
        //     self.$storage.isAdmin = response.data.role;
        //   });
        // };

        self.login = function() {
            authentication.getUser(self.user).then(function(response){
             self.user.name = '';
             self.user.password = '';
             self.userLogin = response.data;
             $window.sessionStorage.token = response.data.token;
             authFactory.isLoggedIn = response.data.success;
             self.$storage.isLoggedIn = response.data.success;
             self.$storage.user = response.data.user.name;
             //self.checkUserRole();
             $location.path('/');
          });
        };

        self.logout = function() {
          authFactory.isLoggedIn = false;
          delete $window.sessionStorage.token;
          $location.path('/');
        };

        self.isActiveTab = function() {
           var currentPath = $location.path().split('/')[1];
           return (url === currentPath ? 'active' : '');
        };
      }
    ]
  });

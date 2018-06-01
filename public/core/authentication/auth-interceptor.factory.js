'use strict';

angular.
  module('core.authentication').
  factory('authInterceptor', ['$http','$window','$q','authFactory',

    function($http,$window,$q,authFactory) {
      return {
        request: request,
        response: reponse,
        responseError: responseError
      };

      function request(config){
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers.Authorization = 'Bearer' + $window.sessionStorage.token;
        }
        return config;
      }

      function response(response){
        if (response.status === 200 && $window.sessionStorage.token && !authFactory.isLoggedIn){
          authFactory.isLoggedIn = true;
        }
        if (response.status === 401){
          authFactory.isLoggedIn = false;
        }
        return response || $q.when(response);
      }

      function responseError(rejection){
          if (rejection.status === 401 || rejection.status === 403) {
            delete $window.sessionStorage.token;
            authFactory.isLoggedIn  = false;
            $location.path('/');
          }
          return $q.reject(rejection);
      }

    }
]);

'use strict';

angular.
  module('core.authentication').
  factory('authentication', ['$http',

    function($http) {
      return {
        getUser: getUser,
        checkAdminUser : checkAdminUser
      };

      function getUser(user) {
        return $http.post('/api/login',user).then(complete).catch(failed);
      }

      function checkAdminUser(user) {
        return $http.post('/api/checkAdminUser',user).then(complete).catch(failed);
      }

      function complete(response) {
        return response;
      }

      function failed(error) {
        console.log(error.statusText);
      }

    }
]);

'use strict';

angular.
  module('core.authentication').
  factory('authFactory', [

    function() {
      return {
        auth: auth
      };

      var auth = {
        isLoggedIn: false
      };

    }
]);

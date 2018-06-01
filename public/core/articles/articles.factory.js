'use strict';

angular.
  module('core.articles').
  factory('Articles', ['$http',

    function($http) {
      return {
        // Yohan check here
        getIssues : getIssues,
        getArticlesByIssue : getArticlesByIssue,
        getArticle : getArticle,
      };

      function getIssues() {
        return $http.get('/api/getIssues/').then(complete).catch(failed);
      }

      function getArticlesByIssue(issueNo) {
        return $http.get('/api/getArticlesByIssue/'+issueNo).then(complete).catch(failed);
      }

      function getArticle(articleId) {
        return $http.get('/api/getArticlesByIssue/'+articleId).then(complete).catch(failed);
      }

      function complete(response) {
        return response;
      }

      function failed(error) {
        console.log(error.statusText);
      }
    }
]);

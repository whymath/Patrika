'use strict';

angular.
  module('issuePage').
  component('issuePage', {
    templateUrl: 'issue-page/issue-page.template.html',
    controller: ['$routeParams','$route','Articles',
      function issuePageController($routeParams, $route, Articles) {

        var self = this;

        self.options = {
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        Articles.getArticlesByIssue($routeParams.issueNo).then(function(response) {
            self.issueArticles = response.data.sort();
        });
      }
    ]
  });

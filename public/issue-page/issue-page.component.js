'use strict';

angular.
  module('issuePage').
  component('issuePage', {
    templateUrl: 'issue-page/issue-page.template.html',
    controller: ['$routeParams','$route','Articles',
      function issuePageController($routeParams, $route, Articles) {

        var self = this;
        var articlesList = [];

        self.options = {
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        Articles.getArticlesByIssue($routeParams.issueNo).then(function(response) {
          // Yohan to check whole method
          console.log("Printing getArticlesByIssue() response = ", response);

          for (var i = 0; i < response.data.length; i++) {
            //console.log("Printing response.data[i] object = ", response.data[i]);
            articlesList.push(response.data[i]);
            //console.log("Printing interim articlesList object = ", articlesList);
          }

          self.issueArticles = articlesList;
          console.log("Printing final issueArticles object = ", issueArticles);
        });
      }
    ]
  });

'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['$routeParams','$route','Articles',
      function homePageController($routeParams, $route, Articles) {

        var self = this;

        self.options = {
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        Articles.getIssues().then(function(response) {
            self.issueNos = response.data.sort().reverse();
        });

        self.viewPdfListener = function(issueNo) {
          // Yohan to update
        };
      }
    ]
  });

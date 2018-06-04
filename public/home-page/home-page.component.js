'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['$routeParams', '$route', 'Articles',
      function homePageController($routeParams, $route, Articles) {

        var self = this;
        var issuesList = [];

        self.options = {
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        Articles.getIssues().then(function (response) {
          // Yohan to check whole method
          console.log("Printing response object = ", response);

          for (var i = 0; i < response.data.length; i++) {
            //console.log("Printing response.data[i] object = ", response.data[i]);
            issuesList.push(response.data[i]);
            //console.log("Printing interim issuesList object = ", issuesList);
          }

          self.issues = issuesList;
          console.log("Printing final issues object = ", issues);
        });

        self.viewPdfListener = function (issueNo) {
          // Yohan to update
          var filename = "OBP_Team_Newsletter_Issue_" + issueNo + ".pdf";
          console.log("Redirecting to file = ", filename);
          
        };
      }
    ]
  });

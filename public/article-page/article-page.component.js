'use strict';

angular.module('articlePage').
  component('articlePage',{
    templateUrl: 'article-page/article-page.template.html',
    controller: ['$route','$routeParams','Articles',
      function articlePageController ($route, $routeParams, Articles) {
        
        var self = this;

        self.options = {
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        Articles.getArticle($routeParams.articleId).then(function(response){
          self.currArticle = response.data;
        });
      }
    ]
  })

'use strict';

angular.module('manageContent').
  component('manageContent',{
    templateUrl: 'manage-content/manage-content.template.html',
    controller: ['$routeParams','$location','SvnLinks','$localStorage','authentication',
      function manageContentController ($routeParams,$location,SvnLinks,$localStorage,authentication) {
        var self = this;

        self.$storage = $localStorage;
        self.isLoggedIn = $localStorage.isLoggedIn;
        self.isAdmin = self.$storage.isAdmin;

        self.checkCase = function() {
          return self.isLoggedIn && self.isAdmin;
        }

        self.downloadSVN = {
          username: '',
          password: ''
        };

        SvnLinks.getSVNLinks().then(function(response){
          self.svnLinks = response.data;
          self.frameworklink = response.data[0];
          self.svnLinks[0].checked = true;
          self.svnLinks[0].disabled = true;
          for (var i=1;i<self.svnLinks.length;i++){
            if (self.svnLinks[i].name.indexOf("Properties") > 0){
              self.svnLinks[i].checked = true;
              self.svnLinks[i].disabled = true;
            } else {
              self.svnLinks[i].checked = false;
              self.svnLinks[i].disabled = false;
            }
          }
        });

        self.setupLinks = function () {
          var names = '';
          for (var i=0;i<self.svnLinks.length;i++){
            if (self.svnLinks[i].checked){
              names = names.concat(self.svnLinks[i].name)+",";
            }
          }
          self.downloadSVN.names = names;
          SvnLinks.checkOutFramework(self.downloadSVN).then(function(response){
            console.log(response.data);
          });
        };
      }
    ]
  });

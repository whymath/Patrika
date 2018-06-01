var express = require('express');
var router = express.Router();

module.exports = router;

var ctrlUsers = require('../controllers/users.controller.js');
var ctrlArticles = require('../controllers/articles.controller.js');
var ctrlIssues = require('../controllers/issues.controller.js');


router
  .route('/getIssues')
  .get(ctrlIssues.getIssues);

router
  .route('/getArticlesByIssue/:issueNo')
  .get(ctrlArticles.getArticlesByIssue);

router
  .route('/getArticle/:articleId')
  .get(ctrlArticles.getArticle);

router
  .route('/login')
  .post(ctrlUsers.loginUser);

router
  .route('/register')
  .post(ctrlUsers.registerUser);

router
  .route('/checkAdminUser')
  .post(ctrlUsers.checkAdminUser);

module.exports = router;

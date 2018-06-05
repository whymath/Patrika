var mongoose = require('mongoose');
var articles = mongoose.model('articles');

module.exports.getArticlesByIssue = function(req, res) {
  console.log("Fetch Articles for Issue", req.params.issueNo);
  var currIssueArticles = [];

  articles.
  find().
  //where('issueNo').equals(req.params.issueNo).
  exec(function(err, allArticles) {
      if (err) {
        console.log("Error finding Articles", err);
        res.status(500).json(err);
        } else {
          console.log("Total no. of Articles = ", allArticles.length);
          console.log("Issue No. = ", req.params.issueNo);

          for(var i = 0 ; i < allArticles.length; i++) {
            console.log("Checking Issue No. = ", allArticles[i].issueNo);
            if (req.params.issueNo == allArticles[i].issueNo) {
              currIssueArticles.push(allArticles[i]);
            }
          }

          res.status(200).json(currIssueArticles);
        }
    });
};

module.exports.getArticle = function(req, res) {
  console.log("Fetching Article ", req.params.articleId);
  var currArticle;

  articles.
  find().
  //where('articleId').equals(req.params.articleId).
  exec(function(err, allArticles) {
      if (err) {
        console.log("Error finding Articles", err);
        res.status(500).json(err);
        } else {
          console.log("Total no. of articles = ", allArticles.length);

          for(var i = 0 ; i < allArticles.length; i++) {
            console.log("Checking Article ID = ", allArticles[i].articleId);
            if (req.params.articleId == allArticles[i].articleId) {
              currArticle = allArticles[i];
            }
          }

          res.status(200).json(currArticle);
        }
    });
};

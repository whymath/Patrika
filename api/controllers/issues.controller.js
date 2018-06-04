var mongoose = require('mongoose');
var issues = mongoose.model('issues');

module.exports.getIssues = function(req, res) {
  console.log('Fetching list of all Issues');
  //var allIssues = [];

  issues.find().exec(function(err, issuesList) {
      if (err) {
        console.log("Error finding Issues", err);
        res.status(500).json(err);
        } else {
          console.log(issuesList.length);
          // Yohan check
          res.status(200).json(issuesList);
        }
    });
};

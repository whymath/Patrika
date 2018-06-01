var mongoose = require('mongoose');
var issues = mongoose.model('issues');

module.exports.getIssues = function(req, res) {
  console.log('Fetching list of all Issues');
  var issueNos = [];

  issues.find().exec(function(err, issuesList) {
      if (err) {
        console.log("Error finding Issues", err);
        res.status(500).json(err);
        } else {
          console.log(issuesList.length);

          for(var i = 0 ; i < issuesList.length; i++) {
            issueNos.push(issuesList[i].issueno);
          }

          res.status(200).json(issueNos);
        }
    });
};

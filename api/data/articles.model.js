var mongoose = require('mongoose');
//var users = mongoose.model('users', userSchema);
//var issues = mongoose.model('issues', issueSchema);

var articleSchema = new mongoose.Schema({
  articleId: {
    type: String
    //required: true
  },
  title: {
    type: String
    //required: true
  },
  authors: {
    //type: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
    //type: [users]
    type: [String]
  },
  category: {
    type: String
  },
  issueNo: {
    //type: issues
    type: Number
  },
  tags: {
    type: [String]
  },
  publishDate:{
    type: String
  }
});

mongoose.model('articles', articleSchema);

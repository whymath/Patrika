var mongoose = require('mongoose');
//var articles = mongoose.model('articles', articleSchema);

var issueSchema = new mongoose.Schema({
  issueNo: {
    type: Number
    //required: true
  },
  articles: {
    //type: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
    //type: [articles]
    type: [String]
  },
  publishDate:{
    type: String
  },
  issueType:{
    type: String
  }
});

mongoose.model('issues', issueSchema);


use obpnldb

db.users.remove({})
db.articles.remove({})
db.issues.remove({})

db.users.save( {name:"Yohan Mathew"} )
db.users.save( {name:"Bourajyoti Sose"} )

db.articles.save( { articleId: "i001a01", title: "Aabeyy", authors: [ "Yohan Mathew" ], issueNo: 1, bodyText: "<p class=MsoNormal><span>Looking ahead, along with all the hustle and the dynamic changes happening with our projects, quite a few things are changing for us at the Newsletter too. As of this issue, our reader-base is expanding to a wider audience that includes teams outside India and Australia, and we are planning to get new faces onboard for contributing, designing and editing, while at the same time increasing the scope and improving the quality of our delivery. This initiative that began 2 years ago isn&#8217;t over, and we definitely need help from all of you to accomplish this.</span></p>" } )
db.articles.save( { articleId: "i001a02", title: "Shaaurajothi", authors: [ "Yohan Mathew", "Bourajyoti Sose" ], issueNo: 1, bodyText: "<p class=MsoNormal><span>Hello, OBP!</span></p><p class=MsoNormal><span></span></p><p class=MsoNormal><span>We are glad to bring to you our 50th issue of the Newsletter, and we, have the good fortune of being able to do this around the time that we turn 2 years old. For all of us at the editorial team, the past year has been an amazing experience, and publishing this milestone issue is a proud and exciting moment for us.</span></p>" } )
db.articles.save( { articleId: "i002a01", title: "Faakuh", authors: [ "Bourajyoti Sose" ], issueNo: 2, bodyText: "<p class=MsoNormal><span>We hope you enjoyed all our issues, and we look forward to working with, and delivering to, a lot more of you in the future.</span></p>" } )

db.issues.save( { issueNo: 1, articles: ["i001a01", "i001a02"] } )
db.issues.save( { issueNo: 2, articles: ["i002a01"] } )

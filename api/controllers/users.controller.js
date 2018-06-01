var mongoose = require('mongoose');
var users = mongoose.model('users');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var secret = 'Qawert1234#1256%poujnmk6^';

module.exports.registerUser = function(req, res) {
  var newUser = new users({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    team: req.body.team,
    password: bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
  });
  users.create(newUser,function(err, user){
    if (err) {
      return res.status(500).json({
        err: err
      });
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  })
};

module.exports.loginUser = function(req, res){
  var name = req.body.name;
  console.log(name);
  users.findOne({
    name : name
  }).
    exec(function(err, user){
      if (err){
        console.log(err);
        res.status(400).json(err);
      } else {
        console.log(user);
        if (bcrypt.compareSync(req.body.password,user.password)){
          var jsonwebtoken = jwt.sign({username: name},'Qawert1234#1256%poujnmk6^',{expiresIn:1800});
          users.findOne({name : name}).select('-password').
                exec(function(err, user1){
              res.status(200).json({success:true,token:jsonwebtoken,user:user1});
          })
        }else {
          res.status(401).json("unauthorized");
        }
      }
    });
};

module.exports.authenticate = function(req, res, next){
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,secret,function(error, decoded){
      if (error) {
        console.log();
        res.status(401).json('unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('unauthorized');
  }
};

module.exports.returnUserType = function(req, res, next){
  var name = req.body.name;
  console.log(name);
  users.findOne({
    name : name
  }).
    exec(function(err, user){
      if (err){
        console.log(err);
        res.status(400).json(err);
      } else {

      }
    });
};

module.exports.checkAdminUser = function(req, res, next){
  var name = req.body.name;
  console.log(name);
  users.findOne({
    name : name
  }).select('role -_id').
    exec(function(err, user){
      if (err){
        console.log(err);
        res.status(400).json(err);
      } else {
        console.log(user);
        if (user.toObject().role === 'superadmin' || user.toObject().role === 'admin') {
          var userstate = {
            role : 'true'
          }
          res.status(201).json(userstate);
        } else {
          var userstate = {
            role : 'false'
          }
          res.status(201).json(userstate);
        }
      }
    });
};

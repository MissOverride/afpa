"use strict";

var util = require('util');
var path = require("path");
var express = require("express");
var morgan = require("morgan");
var serveStatic = require("serve-static");
var _ = require('lodash');
var $ = require('jquery');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/afpa');

var app = module.exports = express();

app.enable("trust proxy");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname,'.', "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(serveStatic(path.join(__dirname,'.', "public")));

app.get('/bazar', function (req, res) {
 

    var collection = db.get('bazar');
    collection.find({},{},function(e,docs){
      console.log(docs)
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

app.get('/remontee', function (req, res) { 
 res.render('remontee')
})

app.post('/datas',function(req,res ){
  console.log(req.params.datas)
})


'use strict';

import { getDataMongo } from './dbWrapper/getDataMongo';
import { postDataMongo } from './dbWrapper/postDataMongo';
import { connect } from './dbWrapper/connectMongo';

import uriUtil from 'mongodb-uri';

import render from './lib/render';
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// var db = connect();

var db = 1;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('listening on 3000')
})

app.get('/', function (rez, res) {
  var loginDetails = {
    'username': 'c0f45@example.com',
    'password': 'foobar'
  };

  var options = {
    url: 'http://193.226.51.18:8888/api/V2/auth',
    method: 'POST',
    body: JSON.stringify(loginDetails),
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(options, function (error, response, body) {
    //request well done aici ai ce intoarce apiu facultatii
    console.log(body)
    console.log('Autentificare in auth!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    res.send(body);
  });
})
//END Auth

app.get('/gettest', (req, res) => {
  console.log(req.body);
  getDataMongo(app, db);
  res.send(results);
});

app.post('/posttest', (req, res) => {
  console.log(req.body);
  postDataMongo(app, db);
  res.send("Success");
});
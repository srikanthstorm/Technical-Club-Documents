 	var express = require('express');

 	var request = require("request");
 	var app = express(); // create our app w/ express
 	var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
 	app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
 	app.use(bodyParser.urlencoded({
 	  'extended': 'true'
 	})); // parse application/x-www-form-urlencoded
 	app.use(bodyParser.json()); // parse application/json
 	app.use(bodyParser.json({
 	  type: 'application/vnd.api+json'
 	})); // parse application/vnd.api+json as json
 	app.post('/answer', function (req, res) {
    console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/studentassistant/collections/answers',
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          query: req.body.query,
 	          answer: req.body.answer,
 	          domain: req.body.domain
 	          },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/conferences');
 	        console.log(body);
 	      });

 	    });
 	    app.post('/insert', function (req, res) {

 	      console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/bloodbot/collections/donors',
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          fname: req.body.first_name,
 	          lname: req.body.last_name,
 	          year: req.body.year,
 	          branch: req.body.branch,
 	          reason: req.body.reason,
 	          email: req.body.email
 	        },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/success');
 	        console.log(body);
 	      });

 	    }); app.post('/speakersbio', function (req, res) {

 	      console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/bloodbot/collections/speakers',
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          fname: req.body.first_name,
 	          lname: req.body.last_name,
 	          domain: req.body.domain,
 	          duration: req.body.duration,
 	          year: req.body.year,
 	          date: req.body.date,
 	          reason: req.body.reason,
 	          email: req.body.email
 	        },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/biosuccess');
 	        console.log(body);
 	      });

 	    }); app.post('/updatenewsfeed', function (req, res) {

 	      console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/developerscommunity/collections/' + req.body.category,
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          fname: req.body.first_name,
 	          lname: req.body.last_name,
 	          title: req.body.title,
 	          description: req.body.description,
 	          email: req.body.email,
 	          location: req.body.location,
 	          duration: req.body.duration
 	        },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/' + req.body.category);
 	        console.log(body);
 	      });

 	    }); app.post('/join', function (req, res) {

 	      console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/developerscommunity/collections/members',
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          fname: req.body.first_name,
 	          lname: req.body.last_name,
 	          rollno: req.body.rollno,
 	          yop: req.body.yop,
 	          reason: req.body.reason,
 	          email: req.body.email
 	        },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/home');
 	        console.log(body);
 	      });

 	    }); app.post('/register', function (req, res) {

 	      console.log(req.body);
 	      var options = {
 	        method: 'POST',
 	        url: 'https://api.mlab.com/api/1/databases/developerscommunity/collections/tcregistrations',
 	        qs: {
 	          apiKey: '_0-_W02zLeFG4dZXI7okwovmCylH794r'
 	        },
 	        headers: {
 	          'content-type': 'application/json'
 	        },
 	        body: {
 	          fname: req.body.first_name,
 	          lname: req.body.last_name,
 	          rollno: req.body.rollno,
 	          yop: req.body.yop,
 	          reason: req.body.reason,
 	          course: req.body.course,
 	          email: req.body.email,
 	          section: req.body.section
 	        },
 	        json: true
 	      };

 	      request(options, function (error, response, body) {
 	        if (error) throw new Error(error);

 	        res.redirect('/#!/success');
 	        console.log(body);
 	      });

 	    });
 	    // listen (start app with node server.js) ======================================
 	    app.listen(8080); console.log("App listening on port 8080");
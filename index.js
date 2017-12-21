"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



restService.post("/webhookcall", function(req, res) {
	console.log(req.body);
	const action = req.body.result.action;
	const parameters = req.body.result.parameters;
	
	console.log('Server webhook data');
	if(action=='input.savedonordata'){
		console.log(req.body.originalRequest.data.sender);
  return res.json({
    speech: 'Your Donation details has been saved successfully',
    displayText: 'Your Donation details has been saved successfully using webhook',
    source: "bloodbank"
  });
	}
  if(action=='input.saverecipientdata'){
	  console.log('Saving the blood request in Database');
	  
	  
  return res.json({
    speech: 'We have registered your request. Please be patient while we consult the available donors for you.',
    displayText: 'We have registered your request. Please be patient while we consult the available donors for you.',
    source: "bloodbank"
  });
	}
	
	if(action=='input.trackdonor'){
	  console.log('Tracking Donor\'s Location');
	  
	  
  return res.json({
    speech: 'We have registered your request. Please be patient while we consult the available donors for you.',
    displayText: 'This is the current Donor\'s Location',
    source: "bloodbank"
  });
	}
  if(action=='input.deletedonor'){
	  console.log('Deleting Donor');
	  
	  
  return res.json({
    speech: 'We have registered your request. Please be patient while we consult the available donors for you.',
    displayText: 'Your Donor Details have deleted using Webhook',
    source: "bloodbank"
  });
	}
	if(action=='input.donationstatus'){
	  console.log('Getting the Donoation details');
	  
	  
  return res.json({
    speech: 'We have registered your request. Please be patient while we consult the available donors for you.',
    displayText: 'These are your donation details',
    source: "bloodbank"
  });
	}
  
  if(action=='input.name'){
	  console.log('updating name');
	  
	  
  return res.json({
    speech: 'We have registered your request. Please be patient while we consult the available donors for you.',
    displayText: 'Your input name is updated',
    source: "bloodbank"
  });
	}
});



restService.listen(process.env.PORT || 8080, function() {
  console.log("Server up and listening");
});

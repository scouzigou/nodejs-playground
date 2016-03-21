// Manage Activities
var express = require('express');
var router = express.Router();
var activity = require('../models/activity');

router.get('/activity', function(req, res){
	var activities = activity.getAll();
	console.log(activities)
	res.status(200).end()
});

router.get('/activity/:id', function(req, res){
	var activity = activity.get(id);
});

router.post('/activity', function(req, res){
	console.log("post /activity")
	console.log(req.body())
	res.status(200).end()

})

module.exports = router;
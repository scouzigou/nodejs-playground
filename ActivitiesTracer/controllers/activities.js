// Manage Activities
var router = require('express').Router();
var assert = require('assert')
var activity = require('../models/activity');

router.get('/activity', function(req, res){
	activity.getAll(function (err,docs){
		if(err) return res.status(500).end()
		res.setHeader('Content-Type', 'application/json')
		res.json(docs)
	})
})

router.get('/activity/:id', function(req, res){
	activity.get(req.params.id, function(err, activity){
		if (err) return res.status(404).end()
		res.setHeader('Content-Type', 'application/json')
		res.json(activity)
	})
})

// Create a new Activity
router.post('/activity', function(req, res){
	//req.body should be a json structure like this: {"name": "my-activity"}
	activity.create(req.body, function(err, result, activity){
		if(err) return res.status(500).end()
		res.setHeader('Content-Type', 'application/json')
		res.json(activity)
	})
})

module.exports = router;

// Activity model
var db = require('../db')
var ObjectID = require('mongodb').ObjectID

exports.get = function(id, cb){
	if(!db.isValidObjectId(id)) {
		cb('no valid id', null)
	}else {
		var objectId = new ObjectID(id)
		var collection = db.get().collection('activities');
		collection.findOne({'_id': objectId}, function(err, doc) {
			console.log(doc)
			cb(err, doc)
		})
	}
}

exports.getAll = function(cb){
	var collection = db.get().collection('activities')
	collection.find().toArray(function(err, docs){
		if(err) return cb(err)
		cb(null, docs)
	})
}

exports.create = function(activity, cb){
	activity.date = new Date().toString()
	db.get().collection('activities').insertOne(activity, function(err, result){
		if(cb) cb(err, result, activity)
	})
}

exports.update = function(id, newName){
	//TODO
	console.log("Not implemented")
}

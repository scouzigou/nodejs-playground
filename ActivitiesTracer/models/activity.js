var assert = require('assert')

// Activity model
var db = require('../db')

exports.get = function(id){
	console.log("Get the Activity '"+id+"'")
}

exports.getAll = function(){
	var collection = db.get().collection('activities')
	collection.find().toArray(function(err, docs){
		console.log(docs)
	})
}

exports.create = function(name){

	db.get().collection('activities').insertOne({
		"name": name
	}, function(err, result){
		assert.equal(err, null)
		console.log("Insert a new Activity (name: "+name+") in db.")
	})
}

exports.update = function(id, newName){
	console.log("Update the Activity '"+id+"'; name='"+newName+"'")
}
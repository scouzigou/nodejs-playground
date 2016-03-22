var MongoClient = require('mongodb').MongoClient

var state = {
	db : null,
}

exports.connect = function(url, done){
	if(state.db) return done();
	MongoClient.connect(url, {server:{socketOptions:{connectTimeoutMS:500}}}, function(err, db){
		if (err) return done(err)
		console.log("init state.db")
		state.db = db
		console.log("state.db : "+state.db)
		done()
	})
}

exports.get = function(){
	return state.db;
}

exports.close = function(done){
	if(state.db) {
		state.db.close(function(err, result){
			state.db = null
			state.mode = null
			done(err)
		})
	}
}

exports.isValidObjectId = function(str) {
	return (/^[0-9a-fA-F]{24}$/).test(str);
}

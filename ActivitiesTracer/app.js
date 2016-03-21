var express = require('express')
var app = express()
var db = require('./db')

app.use(require('body-parser'))
app.use(require('./middlewares/log'))
app.use(require('./controllers/activities'))

// connect to mongodb before starting the app
db.connect('mongodb://127.0.0.1:27017/activities-manager', function(err){	
	if(err) {
		console.log("Error connecting to Mongo."+err)
		process.exit(1)
	}else {
		app.listen(3000, function(){
			console.log('Listening on port 3000')
		})
	}
})

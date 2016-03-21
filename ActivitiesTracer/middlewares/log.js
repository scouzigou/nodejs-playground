module.exports = function(req, res, next) {
	console.log("req.method: "+req.method);
	console.log("req.url: "+req.url);
	console.log("req.body: "+req.body);
	next();
}
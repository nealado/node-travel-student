var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Neala";
	app.get("/", function (req, resp) {
		resp.write("<html><body><h1>Welcome to "+myName+"'s first web app!</body></html>");
		resp.end();
	});
  app.get("/icecream/:flavor", function(req, res) {
     res.render("icecream", {
         flavor: req.params.flavor
     });
  });
  
  app.get("/travel", function(req, res) {
    db.findArray({}, function (results) {
      res.render("travel", {
        locations: results
      })
    })
  });
})
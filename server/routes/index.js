module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index')
	})


	app.use('/api/user', require('./user'))


	app.get('*',function(req,res){
		res.redirect('/')
	})
}
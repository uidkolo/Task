const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes')

// 设置静态资源目录
app.use(express.static(path.join(__dirname,'public')))

//设置模板引擎
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

//设置视图目录
app.set('views', path.join(__dirname,'views'))

// 路由
routes(app)

//设置端口
app.listen(3000, function(){
	console.log('server is runing at port 3000')
})
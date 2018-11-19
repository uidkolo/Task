const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')

// POST /api/user/create 新增用户
router.get('/create', function(req,res,next){
	let user = {
		name: 'huyang',
		password: '123456',
		avatar: '/img/user.77bf1bb.jpg'
	}
	UserModel.create(user).then(result=>{
		res.status(200).json({
			code: 1,
			message: '查询成功',
			data: result
		})
	}).catch(err=>{
		res.status(500).json({
			code: 0,
			message: err.message
		})
	})
})

module.exports = router
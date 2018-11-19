const User = require('../db/user')

module.exports = {
	// 新增一个用户
	create: function(user){
		return User.find(user).exec()
	}
}
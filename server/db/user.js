const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/taskSystem',{
	useNewUrlParser: true
})

const userSchema = new Schema({
	name: {type: String, required: true},
	password: {type: String, required: true},
	avatar:{type: String, required: true},
	role:{type:Number, enum:[0,1], default: 0} //用户角色，1：管理员；0：开发者
})
const userModel = mongoose.model('User',userSchema)

module.exports = userModel
//引入mongoose数据库，增删改查
var mongoose = require('mongoose');
//制作数据表
var MovieSchema = new mongoose.Schema({
	director: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	//增加和删除电影纪录
	meta:{
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
});
//save,每次存储之前都会调用此函数
MovieSchema.pre('save',function (next) {
	//如果数据是新增的，创建时间和更新时间设置为当前时间
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	//否则只更新更新时间
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
})
//查找数据方法设置
MovieSchema.statics = {
	fetch:function (cb) {
		return this;
		.find({})
		.sort('meta.updateAt')
		exec(cb)
	},
	findById:function (id,cb) {
		return this;
		.findOne({_id: id})
		exec(cb)
	}
}














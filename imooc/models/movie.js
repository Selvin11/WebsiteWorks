//从schemas(纲要)中引入制作好的数据库模块
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
//Movie 模型名   MovieSchema 模型模式
var Movie = mongoose.model('Movie','MovieSchema');

//导出最终模型
module.export = Movie;

//引入项目所需模块
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var _ = require('underscore');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express(); 
 //引入数据库
mongoose.connect('mongodb://localhost/imooc');

 app.set('views','./views/pages');
 //url 解析
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(serveStatic('bower_components'));
 //view engine
 app.set('view engine','jade');
 app.listen(port);

 console.log('imooc started on port' + port);

 //index page
 app.get('/',function (req,res) {
 	Movie.fetch(function (err,movies) {
 		if (err) {
 			console.log(err);
 		}
 	
 	res.render('index',{
 		title:'imooc 首页',
 		movies: []
		})
 	})
 })

 //detail
 app.get('/movie/:id',function (req,res) {
 	var id = req.params.id;

 	Movie.findById(id,function (err,movie) {
 		res.render('detail',{
 			title:'imooc' + movie.title,
 			movies: movies
 		})
 	})
 	
 })
//admin update
app.get()
 //admin
 app.get('/admin/movie',function (req,res) {
 	res.render('admin',{
 		title:'imooc 后台录入页',
 		movie: {
 			title: '',
 			director: '',
 			country: '',
 			year: '',
 			poster: '',
 			flash: '',
 			summary: '',
 			language: ''
 		}
 	})
 })
 //admin post movie从后台拿到数据的录入页面
app.post('/admin/movie/new',function (req,res) {
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;

	if (id !== 'undefinded') {
		Movie.findById(id,function(err,movie){
			if (err) {
				console.log(err);
			}

			_movie = _.extend(movie,movieObj)
			_movie.save(function (err,movie) {
				if (err) {
					console.log(err);
				}

				res.redirect('./movie/' + movie._id);
			})
		})
	}
	else{
		_movie = new Movie({
			director:movieObj.director,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			poster:movieObj.poster,
			summary:movieObj.summary,
			flash:movieObj.flash
		})

		_movie.save(function (err,movie) {
				if (err) {
					console.log(err);
				}

				res.redirect('./movie/' + movie._id);
			})
	}
})



//list
 app.get('/admin/list',function (req,res) {
 	Movie.fetch(function (err,movies) {
 		if (err) {
 			console.log(err);
 		}
 	
 	res.render('list',{
 		title:'imooc 列表页',
 		movies: movies
		})
 	})
 })


















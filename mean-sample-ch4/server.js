var express = require('express'),
    cors = require('cors'),
    app = express();
app.use(cors());
var bodyParser = require('body-parser')
var Post = require('./models/post')
var Type = require('./models/Types')
var User = require('./models/user')

var logger = require('morgan')
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(logger('dev'))
app.use(express.static(__dirname))
app.get('/api/posts', function (req, res, next) {
    Post.find({}, function (err, posts) {
        if (err) {
            return next(err)
        }
        res.json(posts)
    })
})

app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        productName: req.body.productName,
        productIntroduction: req.body.productIntroduction,
        productDetail: req.body.productDetail,
        image: req.body.image
    })

    post.save(function (err, post) {
        if (err) {
            return next(err)
        }
        res.status(201).json(post)
    })
})









app.get('/api/types', function (req, res, next) {
    Type.find(function (err, Type) {
        if (err) {
            return next(err)
        }
        res.json(Type)
    })
})

app.post('/api/types', function (req, res, next) {
    var type = new Type({
        id: req.body.id,
        name: req.body.name,
        category: req.body.category
    })
    type.save(function (err, type) {
        if (err) {
            return next(err)
        }
        res.status(201).json(type)
    })
})



app.post('/api/user', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        phonenumber: req.body.phonenumber
    })
    user.save(function (err, data) {
        if (err) {
            return next(err)
        }
        res.status(201).json(data)
    })
})




app.listen(3000, function () {
    console.log('server listening on', 3000)
})
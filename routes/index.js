const express = require('express')
const router = express.Router()

var obj = {
  name: 'joe'
}

router.get('/', function(req, res) {
  res.render('index', { obj: obj.name })
})

// router.get('/users/:name', function(req, res) {
//   var name = req.params.name
//   var tweets = tweetBank.find({ name: name })
//   res.render('index', { tweets: tweets })
// })

// router.get('/tweets/:id', function(req, res) {
//   var id = +req.params.id
//   console.log(id)
//   var tweets = tweetBank.find({ id: id })
//   res.render('index', { tweets: tweets })
// })

module.exports = router

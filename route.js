const express = require('express')
const router = express.Router()
const mHero = require('./models/heroes')

router.get('/heroes', function(req, res){
   mHero.find({}).then(function(result){
       res.send(result)
   })
})

router.get('/heroes/:id', function(req, res){
    mHero.find({ _id: req.params.id }).then(function(result){
        res.send(result)
    })
 })

router.post('/heroes', function(req, res){
    const {name, role} = req.body
    mHero.create(req.body)
        .then(function(result){
            res.send({result})
        })
})

router.put('/heroes/:id', function(req, res){
    mHero.findOneAndUpdate({ _id: req.params.id }, req.body).then(function(hero){
        res.findOne({ _id: req.params.id }).then(function(hero){
            res.send(hero)
        })
    })
})

router.delete('/heroes/:id', function(req, res){
    mHero.findOneAndRemove({ _id: req.params.id }).then(function(result){
        res.send(result)
    })
})

module.exports = router
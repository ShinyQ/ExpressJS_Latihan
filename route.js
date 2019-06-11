const express = require('express')
const router = express.Router()
const mHero = require('./models/heroes')

router.get('/heroes', function(req, res){
   mHero.find({}).then(function(result){
       res.send(result)
   })
})

router.get('/heroes/:id', function(req, res, next){
    mHero.find({ _id: req.params.id }).then(function(result){
        res.send(result)
    }).catch(next)
 })

router.post('/heroes', function(req, res, next){
    const {name, role} = req.body
    mHero.create(req.body)
        .then(function(result){
            res.send({result})
        })
        .catch(next)
})

router.put('/heroes/:id', function(req, res, next){
    mHero.findOneAndUpdate({ _id: req.params.id }, req.body).then(function(hero){
        res.findOne({ _id: req.params.id }).then(function(hero){
            res.send(hero)
        })
    }).catch(next)
})

router.delete('/heroes/:id', function(req, res, next){
    mHero.findOneAndRemove({ _id: req.params.id }).then(function(result){
        res.send(result)
    }).catch(next)
})

module.exports = router
const express = require('express')
const router = express.Router()
const mHero = require('./models/heroes')

router.get('/heroes', function(req, res){
    res.send('GET Heroes')
})

router.post('/heroes', function(req, res){
    const {name, role} = req.body
    mHero.create(req.body)
        .then(function(result){
            res.send({result})
        })
})

router.put('/heroes/:id', function(req, res){
    res.send('PUT Heroes')
})

router.delete('/heroes/:id', function(req, res){
    res.send('Delete Heroes')
})

module.exports = router
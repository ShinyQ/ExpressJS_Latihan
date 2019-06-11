const express = require('express')
const router = express.Router()

router.get('/heroes', function(req, res){
    res.send('GET Heroes')
})

router.post('/heroes', function(req, res){
    res.send('POST Heroes')
})

router.put('/heroes/:id', function(req, res){
    res.send('PUT Heroes')
})

router.delete('/heroes/:id', function(req, res){
    res.send('Delete Heroes')
})

module.exports = router
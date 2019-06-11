const express = require('express')
const app = express()
const router = require('./route')

app.get('/api', function(req, res){
     res.end('403 Forbidden')
})

app.use('/api', router)

app.listen(process.env.port || 2019, function(){
    console.log('Server Berhasil Dibuat')
});

const express = require('express')
const app = express()

app.listen(process.env.port || 2019, function(){
    console.log('Server Berhasil Dibuat')
});
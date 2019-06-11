const express = require('express')
const app = express()

app.get('/api', function(req, res){
     res.end('403 Forbidden')
})

app.get('/api/siswa', function(req, res){
    res.send({
        nama: "Kurniadi Ahmad Wijaya",
        umur:27
    })
})

app.listen(process.env.port || 2019, function(){
    console.log('Server Berhasil Dibuat')
});
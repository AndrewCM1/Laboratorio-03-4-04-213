const express = require('express')
const port = 3500
const app = express()

app.get('/products',(req, res)=>{
    //validate data
    //query bd
    //process data
    //other actions on data

    res.send('lista de productos')
})

app.post('/products',(req, res)=>{
    res.send('creando productos')
})
app.put('/products',(req, res)=>{
    res.send('actualizando productos')
})

app.delete('/products', (req, res)=>{
    res.send('eliminando productos')
})


app.patch('/products', (req, res)=>{
    res.send('actualizando una parte del producto')
})

app.listen(port)
console.log('Server on port ${port}')
const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json())
const PORT=process.env.PORT
const MONGOOS=process.env.MONGOOS
const {getCrypto,addCrypto,getFCrypto,deleteCrypto,updataCrypto}=require('./controller/Crypto.controller')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOS, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res)=> { 
  res.send('Hello World')
})

app.get('/getCrypto',getCrypto )
app.post('/addCrypto',addCrypto )
app.get('/getFCrypto/:email',getFCrypto )
app.delete('/deleteCrypto/:id',deleteCrypto )
app.put('/updataCrypto/:id',updataCrypto )
app.listen(PORT ,()=>{
    console.log(`working in port ${PORT}`)
})
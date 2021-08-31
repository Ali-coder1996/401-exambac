'use strict';
const { Crypto, myCrypto }=require('../model/Crypto.model')
const axios = require('axios');


const getCrypto =(req, res)=> { 
   let url=`https://crypto-explorer.herokuapp.com/crypto-list/`
   axios.get(url).then(itm=>{
       console.log(itm.data)
       let data=itm.data
       data.map(item=>{
           return(new Crypto(item))
       })
       res.json(data)
   })
}

const addCrypto=(req,res)=>{
    console.log(req.body)
    let bodyData=req.body;
    const crypto = new myCrypto({...bodyData})
    crypto.save()
}

const getFCrypto=(req,res)=>{
    console.log(req.params)
    let email=req.params.email
    myCrypto.find({email:email},(error,itm)=>{
        res.send(itm)
    })
}

const deleteCrypto=(req,res)=>{
    let id =req.params.id
    myCrypto.findByIdAndRemove(id,(error,item)=>{
        myCrypto.find({},(error,itm)=>{
            res.send(itm)
        })
    })
}

const updataCrypto=(req,res)=>{
    let data=req.body
    let id=req.params.id;
    myCrypto.findByIdAndUpdate(id,{...data},(error,item)=>{
        myCrypto.find({},(error,itm)=>{
            res.send(itm)
        })
    })
}
function seed() {
    const ali = new myCrypto({
        email: 'alisalamehhjouj@gmail.com',
        image_url:'https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg.',
        toUSD:'48,285.50',
        description:'Bitcoin is a decentralized digital currency'
    },
    )
    const yahay = new myCrypto({
        email: 'v.salvatore7.gs@gmail.com',
        image_url:'https://static.news.bitcoin.com/wp-content/uploads/2021/04/35X2m6UL-cardano.png',
        toUSD:'2.82',
        description:'Cardano is a public blockchain platform.'
    },
    )
    ali.save();
    yahay.save();
    console.log(ali)
    console.log(yahay)
}

// seed()
module.exports={getCrypto,addCrypto,getFCrypto,deleteCrypto,updataCrypto}
const express = require('express');
const Ponto = require('../models/Pontos');


const router = express.Router();

router.post('/register', async(req,res)=> {
    const {nome} = req.body;
    try{
        if (await Ponto.findOne({nome}))
        return res.status(400).send({error:'ponto turistico ja existe'});

        const ponto = await Ponto.create(req.body);
        console.log(req.body);

        return res.send({ponto})
    }catch(err){
        return res.status(400).send({error : 'Registration failed'});
    }
});

router.get('/all', async (req,res) =>{
    const all = await Ponto.find({});
    return res.send({all});
})

module.exports = app => app.use('/pontos',router);
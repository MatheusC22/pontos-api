const express = require('express');
const Ponto = require('../models/Pontos');


const router = express.Router();

router.post('/register', async(req,res)=> {
    const {nome} = req.body;
    try{
        if (await Ponto.findOne({nome}))
        return res.status(400).send({error:'ponto turistico ja existe'});

        const ponto = await Ponto.create(req.body);

        return res.send({ponto})
    }catch(err){
        return res.status(400).send({error : 'Registration failed'});
    }
});

router.delete('/deleteByNome', async (req,res) => {
    const {nome} = req.body;
    try{
        if (await !Ponto.findOne({nome}))
        return res.status(400).send({error: 'ponto turistico nao existe'})

        const deleted = await Ponto.deleteOne({ nome : nome});
        return res.send({deleted});
    }catch(err){
        return res.status(400).send({error : 'Deletion failed'});
    }
}); 

/* GET ALL PONTOS TURISTICOS  BY ESTADO */
router.post('/estado' , async (req,res) => {
    try{
        const { estado } = req.body;

    const est = await Ponto.find({ estado: estado }).exec();
    return res.send({est});
    }catch(err){
        return res.status(400).send({ error : 'error fectching pontos turisticos'})
    }
});


router.get('/all', async (req,res) =>{
    const all = await Ponto.find({});
    return res.send({all});
})

module.exports = app => app.use('/pontos',router);
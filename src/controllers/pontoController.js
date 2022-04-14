const express = require("express");
const Ponto = require("../models/Pontos");

const router = express.Router();

/* REISTRA PONTO TURISTICO */
router.post("/register", async (req, res) => {
  const { nome } = req.body;
  try {
    if (await Ponto.findOne({ nome }))
      return res.status(400).send({ error: "tourist spot already exists " });

    const ponto = await Ponto.create(req.body);

    return res.send({ ponto });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});
/* DELETE PONTO TURISTICO BY NOME */
router.delete("/deleteByNome", async (req, res) => {
  const { nome } = req.body;
  try {
    const deleted = await Ponto.findOneAndDelete({ nome: nome });
    
    if (deleted === null)
      return res.status(400).send({ error: "tourist spot does not exist" });

    return res.send({ deleted });
  } catch (err) {
    return res.status(400).send({ error: "Deletion failed" });
  }
});

/* GET ALL PONTOS TURISTICOS  BY ESTADO */
router.post("/findByEstado", async (req, res) => {
  try {
    const { estado } = req.body;

    const est = await Ponto.find({ estado: estado }).exec();

    //if (est === null)
    //  return res.status(400).send({error : "estate does not exist"});

    return res.send({ est });
  } catch (err) {
    return res.status(400).send({ error: "error fectching tourist spots" });
  }
});
/* GET ALL PONTOS TURISTICOS LIKE NOME */
router.post("/findByNome", async (req,res) =>{
  try{
    const { nome } = req.body;

    const n = await Ponto.find({nome: {
      $regex: nome, $options: 'i'
    }});;

    //if (n === null)
    // return res.status(400).send({error : "tourist spot does not exist ="});

    return res.send({n});
  }catch(err){
    res.status(400).send({err});
  }
});
/* GET ALL PONTOS TURISTICOS */
router.get("/all", async (req, res) => {
  const all = await Ponto.find({});
  return res.send({ all });
});

module.exports = (app) => app.use("/pontos", router);

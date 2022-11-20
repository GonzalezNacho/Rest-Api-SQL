
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao  = require("../dataccess/movies");

/* Obtener todo */
router.get("/", (req, res) => {
  res.status(200).json(dao.getAll(req.query));
});

/*Obtener todo alfabeticamente*/
router.get("/az", (req, res) => {
  res.status(200).json(dao.getAllAlphabetically());
});

/*Obtener todo ordenado desde la z hasta la a*/
router.get("/za", (req, res) => {
  res.status(200).json(dao.getAllAlphabetically().reverse());
});

/*Obtener los destacados*/
router.get("/destacados", (req, res) => {
  res.status(200).json(dao.getDestacados());
});


/* Obtener uno especifico */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = dao.getOne(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.sendStatus(404);
  }
});

/* Agregar un elemento */

router.post("/", middleware.validarUserLogin, (req, res) => {
  
  const body = {...req.body};
  const data = dao.save(body);
  res.status(200).json(data);
});

/* Borrar un elemento */

router.delete("/:id",middleware.validarUserLogin, (req, res) => {
  const id = req.params.id;  

  if (dao.borrar(id)) { 
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

/* Modificar un elemento */
router.put("/:id",middleware.validarUserLogin, (req, res) => {
  const id = req.params.id;
 
  if (dao.update(id, req.body) ) { 
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
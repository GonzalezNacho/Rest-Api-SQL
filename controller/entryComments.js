const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao  = require("../dataccess/comments");

/* Obtener todo los comentarios */
router.get("/", (req, res) => {
  res.status(200).json(dao.getAll(req.query));
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
router.put("/:id", middleware.validarUserLogin, (req, res) => {
  const id = req.params.id;
 
  if (dao.update(id, req.body) ) { 
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
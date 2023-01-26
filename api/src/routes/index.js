const { Router } = require('express');
const gamesRouter = require("./videogamesRouter");
const genreRouter = require("./genreRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/videogames", gamesRouter);
router.use("/genres", genreRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

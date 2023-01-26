const { Router } = require("express");
const { getGenreHandlers }= require("../handlers/genreHandlers");


const genreRouter = Router();

genreRouter.get("/", getGenreHandlers );

module.exports = genreRouter;
const { Router } = require("express");

const { 
    getGamesHandlers, 
    getGamesHandlersId, 
    createGamesHandlers } = require("../handlers/videogamesHandlers")
const gamesRouter = Router();

gamesRouter.get("/", getGamesHandlers);
gamesRouter.get("/:id", getGamesHandlersId);
gamesRouter.post("/", createGamesHandlers);


module.exports = gamesRouter;
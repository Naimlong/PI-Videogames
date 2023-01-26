const { json } = require("body-parser");
const { query } = require("express");
const { searchGamesByName, getAllGames, createGames, getVideogamesById } = require("../controllers/videogamesControllers");

const getGamesHandlers = async (req, res) => {
    const { name } = req.query;
    const results = name ? searchGamesByName(name) : await getAllGames();

    res.status(200).json(results);
    // if (name) {
    //     res.send(`busca a ${name}`);
    // } else{
    //     res.send("buscar a todos los videogames");
    // }
};

const getGamesHandlersId = async (req, res) => {
    const {id} = req.params;
    // res.send(`busca por id ${id}`);
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const game = await getVideogamesById(id, source);
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

const createGamesHandlers = async (req, res) => {
    const { name, description, rating, platforms, released, genres } = req.body;

    try {
        const newVideogames = await createGames(name,description,rating,platforms,released,genres);
        res.status(201).json(newVideogames);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
    
};

module.exports={
    getGamesHandlers, 
    getGamesHandlersId, 
    createGamesHandlers
}
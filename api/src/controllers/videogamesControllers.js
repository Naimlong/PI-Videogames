const { Videogames } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getAllGames = async () => {
    const dbVideogames = await Videogames.findAll();

    const apiVideogames = (
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)).data.results;

    const results = [...dbVideogames, ...apiVideogames];
    return results;
};

const getVideogamesById = async (id, source) => {
    const game =
        source === "api" ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)).data
        : await Videogames.findByPk(id);
    return game;
};


const searchGamesByName = async () => {

};


const createGames = async (name,description,rating,platforms,released,genres) => {
    const newVideogames = await Videogames.create({name,description,rating,platforms,released,genres});
    return newVideogames;

};


module.exports = {
searchGamesByName, 
getAllGames, 
createGames,
getVideogamesById
};
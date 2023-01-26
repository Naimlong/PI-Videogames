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



const searchGamesByName = async () => {

};


const createGames = async () => {

};


module.exports = {
searchGamesByName, 
getAllGames, 
createGames
};
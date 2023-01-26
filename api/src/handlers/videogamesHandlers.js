const { searchGamesByName, getAllGames } = require("../controllers/videogamesControllers");

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

const getGamesHandlersId = (req, res) => {
    const {id} = req.params;
    res.send(`busca por id ${id}`);
};

const createGamesHandlers = (req, res) => {
    res.send("crea un videogames");
};

module.exports={
    getGamesHandlers, 
    getGamesHandlersId, 
    createGamesHandlers
}
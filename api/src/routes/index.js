const { Router } = require('express');
const morgan = require('morgan')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {getAllPokemons,
       getPokemonById,
       getPokemonTypes,
       postPokemon } = require('./controllers/pokemonsControllers')


router.use(morgan('dev'))


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getAllPokemons)
router.get('/pokemons/:id', getPokemonById)
router.get('/types', getPokemonTypes)
router.post('/pokemons', postPokemon)

module.exports = router;

const { Router } = require('express');
const morgan = require('morgan')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllPokemons, pokemonById, pokemonTypes} = require('./controllers/pokemons')


const router = Router();
router.use(morgan('dev'))


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getAllPokemons)
router.get('/pokemons/:id', pokemonById)
router.get('/types', pokemonTypes)

module.exports = router;

const { Router } = require('express');
const morgan = require('morgan')

const pokemons = require('./controllers/pokemons')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(morgan('dev'))


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', pokemons)

module.exports = router;

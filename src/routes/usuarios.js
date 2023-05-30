const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola, estoy en la ruta get usuarios!')
});

module.exports = router;
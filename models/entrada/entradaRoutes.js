var express = require('express');
var router = express.Router();
var entradaController = require('./entradaController.js');

/*
 * GET
 */
router.get('/', entradaController.list);

/*
 * GET
 */
router.get('/:id', entradaController.show);

/*
 * POST
 */
router.post('/', entradaController.create);

/*
 * PUT
 */
router.put('/:id', entradaController.update);

/*
 * DELETE
 */
router.delete('/:id', entradaController.remove);

module.exports = router;

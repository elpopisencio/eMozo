var express = require('express');
var router = express.Router();
var bebidaController = require('./bebidaController.js');

/*
 * GET
 */
router.get('/', bebidaController.list);

/*
 * GET
 */
router.get('/:id', bebidaController.show);

/*
 * POST
 */
router.post('/', bebidaController.create);

/*
 * PUT
 */
router.put('/:id', bebidaController.update);

/*
 * DELETE
 */
router.delete('/:id', bebidaController.remove);

module.exports = router;

var entradaModel = require('./entradaModel.js');

/**
 * entradaController.js
 *
 * @description :: Server-side logic for managing entradas.
 */
module.exports = {

    /**
     * entradaController.list()
     */
    list: function (req, res) {
        entradaModel.find(function (err, entradas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting entrada.',
                    error: err
                });
            }
            return res.json(entradas);
        });
    },

    /**
     * entradaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        entradaModel.findOne({_id: id}, function (err, entrada) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting entrada.',
                    error: err
                });
            }
            if (!entrada) {
                return res.status(404).json({
                    message: 'No such entrada'
                });
            }
            return res.json(entrada);
        });
    },

    /**
     * entradaController.create()
     */
    create: function (req, res) {
        var entrada = new entradaModel({
			nombre : req.body.nombre,
			ingredientes : req.body.ingredientes,
			tipo : req.body.tipo,
			precio : req.body.precio

        });

        entrada.save(function (err, entrada) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating entrada',
                    error: err
                });
            }
            return res.status(201).json(entrada);
        });
    },

    /**
     * entradaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        entradaModel.findOne({_id: id}, function (err, entrada) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting entrada',
                    error: err
                });
            }
            if (!entrada) {
                return res.status(404).json({
                    message: 'No such entrada'
                });
            }

            entrada.nombre = req.body.nombre ? req.body.nombre : entrada.nombre;
			entrada.ingredientes = req.body.ingredientes ? req.body.ingredientes : entrada.ingredientes;
			entrada.tipo = req.body.tipo ? req.body.tipo : entrada.tipo;
			entrada.precio = req.body.precio ? req.body.precio : entrada.precio;
			
            entrada.save(function (err, entrada) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating entrada.',
                        error: err
                    });
                }

                return res.json(entrada);
            });
        });
    },

    /**
     * entradaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        entradaModel.findByIdAndRemove(id, function (err, entrada) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the entrada.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

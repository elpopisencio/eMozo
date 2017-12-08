var bebidaModel = require('./bebidaModel.js');

/**
 * bebidaController.js
 *
 * @description :: Server-side logic for managing bebidas.
 */
module.exports = {

    /**
     * bebidaController.list()
     */
    list: function (req, res) {
        bebidaModel.find(function (err, bebidas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bebida.',
                    error: err
                });
            }
            return res.json(bebidas);
        });
    },

    /**
     * bebidaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        bebidaModel.findOne({_id: id}, function (err, bebida) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bebida.',
                    error: err
                });
            }
            if (!bebida) {
                return res.status(404).json({
                    message: 'No such bebida'
                });
            }
            return res.json(bebida);
        });
    },

    /**
     * bebidaController.create()
     */
    create: function (req, res) {
        var bebida = new bebidaModel({
			nombre : req.body.nombre,
			marca : req.body.marca,
			tipo : req.body.tipo,
			precio : req.body.precio

        });

        bebida.save(function (err, bebida) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bebida',
                    error: err
                });
            }
            return res.status(201).json(bebida);
        });
    },

    /**
     * bebidaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        bebidaModel.findOne({_id: id}, function (err, bebida) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bebida',
                    error: err
                });
            }
            if (!bebida) {
                return res.status(404).json({
                    message: 'No such bebida'
                });
            }

            bebida.nombre = req.body.nombre ? req.body.nombre : bebida.nombre;
			bebida.marca = req.body.marca ? req.body.marca : bebida.marca;
			bebida.tipo = req.body.tipo ? req.body.tipo : bebida.tipo;
			bebida.precio = req.body.precio ? req.body.precio : bebida.precio;
			
            bebida.save(function (err, bebida) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bebida.',
                        error: err
                    });
                }

                return res.json(bebida);
            });
        });
    },

    /**
     * bebidaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        bebidaModel.findByIdAndRemove(id, function (err, bebida) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bebida.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

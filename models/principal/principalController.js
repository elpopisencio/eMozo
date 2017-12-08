var principalModel = require('./principalModel.js');

/**
 * principalController.js
 *
 * @description :: Server-side logic for managing principals.
 */
module.exports = {

    /**
     * principalController.list()
     */
    list: function (req, res) {
        principalModel.find(function (err, principals) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal.',
                    error: err
                });
            }
            return res.json(principals);
        });
    },

    /**
     * principalController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        principalModel.findOne({_id: id}, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal.',
                    error: err
                });
            }
            if (!principal) {
                return res.status(404).json({
                    message: 'No such principal'
                });
            }
            return res.json(principal);
        });
    },

    /**
     * principalController.create()
     */
    create: function (req, res) {
        var principal = new principalModel({
			nombre : req.body.nombre,
			tipo : req.body.tipo,
			ingredientes : req.body.ingredientes,
			precio : req.body.precio

        });

        principal.save(function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating principal',
                    error: err
                });
            }
            return res.status(201).json(principal);
        });
    },

    /**
     * principalController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        principalModel.findOne({_id: id}, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal',
                    error: err
                });
            }
            if (!principal) {
                return res.status(404).json({
                    message: 'No such principal'
                });
            }

            principal.nombre = req.body.nombre ? req.body.nombre : principal.nombre;
			principal.tipo = req.body.tipo ? req.body.tipo : principal.tipo;
			principal.ingredientes = req.body.ingredientes ? req.body.ingredientes : principal.ingredientes;
			principal.precio = req.body.precio ? req.body.precio : principal.precio;
			
            principal.save(function (err, principal) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating principal.',
                        error: err
                    });
                }

                return res.json(principal);
            });
        });
    },

    /**
     * principalController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        principalModel.findByIdAndRemove(id, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the principal.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

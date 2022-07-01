const db = require('../model/index.js');
const Sensor = db.sensor;
const Op = db.sequelize.Op;

// Create tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.value || !req.body.sensor_name || !req.body.location) {
        res.status(400).send({
            message: 'Information is empty!'
        });
        return;
    }

    // Set tutorial
    const sensor = {
        sensor_name: req.body.sensor_name,
        location: req.body.location,
        value: req.body.value
    };

    // Save tutorial
    Sensor
        .create(sensor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create sensor failure.'
            });
        });
};

// Retrieve all tutorials
exports.findAll = (req, res) => {
    const value = req.query.value;
    let condition = { where: {} };

    Sensor
        .findAll(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve all sensor failure.'
            });
        });
};

// Retrieve tutorial by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sensor
        .findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve sensor failure. (id: ' + id + ')'
            });
        });
};

// Update tutorial by id
exports.update = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: { id: id } } : null;

    Sensor
        .update(
            req.body,
            condition
        )
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Sensor updated.'
                });
            } else {
                res.send({
                    message: 'Cannot update sensor. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Update sensor failure. (id: ' + id + ')'
            });
        });
};

// Delete tutorial by id
exports.delete = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: { id: id } } : null;

    Sensor
        .destroy(condition)
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Tutorial deleted.'
                });
            } else {
                res.send({
                    message: 'Cannot delete tutorial. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Delete tutorial failure. (id: ' + id + ')'
            });
        });
};

const router = require('express').Router();
const sensor = require('../controller/controller.js');

// Create tutorial
router.post('/api/sensors', sensor.create);

// Retrieve all tutorials
router.get('/api/sensors', sensor.findAll);

// Retrieve tutorial by id
router.get('/api/sensors/:id', sensor.findOne);

// Update tutorial by id
router.put('/api/sensors/:id', sensor.update);

// Delete tutorial by id
router.delete('/api/sensors/:id', sensor.delete);

module.exports = router;
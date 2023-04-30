const express = require('express');
const router = express.Router();
const env = process.env.ORG;

const { services } = require("../models/models"); // import the services model from the database

// GET all services
router.get('/', async (req, res) => {
  try {
    const service = await services.find();
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a service by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const service = await services.findById(id);
      if (!service) {
        res.status(404).json({ message: 'Service not found' });
      } else {
        res.json(service);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// POST a new service
router.post('/', (req, res) => {
  const serviceInfo  = req.body;
  serviceInfo.orgs = [env]
  
  services.create(serviceInfo,(err, data) => {
    if (err){
      console.log(err)
    } else {
      res.json(data)
    }
  })
});

// PUT update a service
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedService = await services.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      if (!updatedService) {
        res.status(404).json({ message: 'Service not found' });
      } else {
        res.json(updatedService);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// DELETE a service
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedService = await services.findByIdAndDelete(id);
      if (!deletedService) {
        res.status(404).json({ message: 'Service not found' });
      } else {
        res.json(deletedService);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;


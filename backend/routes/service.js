const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a service by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const service = await Service.findById(id);
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
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newService = new Service({ name });
    const savedService = await newService.save();
    res.json(savedService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update a service
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedService = await Service.findByIdAndUpdate(
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
      const deletedService = await Service.findByIdAndDelete(id);
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
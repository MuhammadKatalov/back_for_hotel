const Service = require("../models/Service.model");

module.exports.servicesController = {
  postService: async (req, res) => {
    try {
      const { photo, title, description, price } = req.body;

      const service = await Service.create({ price, photo, title, description });

      res.status(200).json(service);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
  getServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
  getServiceById: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await Service.findById(id);
      res.status(200).json(service);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
  deleteServiceById: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await Service.findByIdAndDelete(id);
      res.status(200).json(service);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
  patchServiceById: async (req, res) => {
    try {
      const { id } = req.params;
      const { photo, title, description } = req.body;

      const service = await Service.findOneAndUpdate(
        id,
        { photo, title, description },
        { new: true }
      );

      res.status(200).json(service);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
};

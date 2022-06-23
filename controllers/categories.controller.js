const Category = require("../models/Category.model");

module.exports.categoriesController = {
  postCategory: async (req, res) => {
    try {
      const { title, description } = req.body;

      const category = await Category.create({ title, description });
      res.status(200).json(category);
    } catch (err) {
      res.status(404).json({
        error: err.message,
      });
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const category = await Category.find();

      if (!category.length) {
        return res.status(404).json({
          error: "Категорий пока нет",
        });
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(404).json({
        error: err.message,
      });
    }
  },
  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findById(id);

      if (!category) {
        return res.status(404).json({
          error: "Категория не найдена",
        });
      }

      res.status(404).json(category);
    } catch (err) {
      res.status(404).json({
        error: err.message,
      });
    }
  },
  patchCategoriesById: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const category = await Category.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );

      res.status(200).json(category);
    } catch (err) {
      res.status(404).json({
        error: err.message,
      });
    }
  },
  deleteCategoryById: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findById(id);

      if (!category) {
        return res.status(404).json({
          error: `Категория с id: ${id} не найдена`,
        });
      }

      await category.remove();

      res.status(200).json({
        status: "Категория удалена",
        id: id,
      });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

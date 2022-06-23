const { Router } = require("express");
const {categoriesController} = require("../controllers/categories.controller");

const router = Router();

router.post("/", categoriesController.postCategory);
router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.patch("/:id", categoriesController.patchCategoriesById);
router.delete("/:id", categoriesController.deleteCategoryById);

module.exports = router;

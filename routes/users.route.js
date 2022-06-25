const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddlewares = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware")
const router = Router();

router.post("/registration", usersController.registerUser);
router.post("/login", usersController.login);
router.patch("/tests/:id/favorite", authMiddlewares, usersController.favoriteTest);
router.patch("/tests/:testId/delete", authMiddlewares, usersController.removeFavorite);
router.get("/", roleMiddleware(["ADMIN"]), usersController.getUsers)

module.exports = router;
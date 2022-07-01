const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware")
const router = Router();

router.post("/registration", usersController.registerUser);
router.post("/login", usersController.login);
router.get("/", roleMiddleware(["ADMIN"]), usersController.getUsers)

module.exports = router;
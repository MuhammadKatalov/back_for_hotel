const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const fileMiddleware = require("../middlewares/file.middleware");
const roleMiddleware = require("../middlewares/role.middleware")
const router = Router();

router.post("/registration", usersController.registerUser);
router.post("/login", usersController.login);
router.get("/", roleMiddleware(["ADMIN"]), usersController.getUsers);
router.get('/:userId', usersController.getUserById);
router.patch('/:userId', usersController.patchUserById);
router.patch('/avatar/:userId', fileMiddleware.single('avatar'), usersController.patchUserAvatar);

module.exports = router;
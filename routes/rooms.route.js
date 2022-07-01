const { Router } = require("express");
const { roomsController } = require("../controllers/rooms.controller");

const router = Router();

router.post("/", roomsController.postRoom);
router.get("/ew", roomsController.getAllRooms);
router.get("/", roomsController.getRoomById);
router.patch("/:id", roomsController.patchRoom);

module.exports = router;

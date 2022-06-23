const { Router } = require("express");
const { roomsController } = require("../controllers/rooms.controller");

const router = Router();

router.post("/", roomsController.postRoom);
router.get("/", roomsController.getAllRooms);
router.get("/:id", roomsController.getRoomById);
router.delete("/:id", roomsController.deleteRoomById);
router.patch("/:id", roomsController.patchRoom);

module.exports = router;

const { Router } = require("express");
const { hotelsController } = require("../controllers/hotels.controller");

const router = Router();

router.post("/", hotelsController.postHotel);
router.get("/", hotelsController.getAllHotels);
router.get("/:id", hotelsController.getHotelById);
router.get("/rating/num", hotelsController.getHotelByRating);
router.patch("/:id", hotelsController.patchHotel);
router.delete("/:id", hotelsController.deleteHotel);

module.exports = router;

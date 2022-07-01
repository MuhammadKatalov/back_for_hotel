const { Router } = require("express");
const { servicesController } = require("../controllers/services.controller");

const router = Router();

router.post("/", servicesController.postService);
router.get("/", servicesController.getServices);
router.get("/services/:id", servicesController.getServiceById);
router.delete("/services/:id", servicesController.deleteServiceById);
router.patch("/services/:id", servicesController.patchServiceById);

module.exports = router;

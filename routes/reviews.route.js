const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/reviews", authMiddleware, reviewsController.postReview);
router.get("/reviews", reviewsController.getAllReviews);
router.get("/reviews/:id", reviewsController.getReviewById);
router.get("/user/reviews", authMiddleware, reviewsController.getReviewByUser);
router.get("/grade/reviews", reviewsController.getReviewsByGrade);
router.patch("/reviews/:id", reviewsController.patchReviewById);
router.patch("/reviews/:id/user", authMiddleware, reviewsController.patchReviewByUser);
router.delete("/reviews/:id", reviewsController.deleteReviewById);
router.delete("/reviews/:id/user", authMiddleware, reviewsController.deleteReviewByUser);

module.exports = router;

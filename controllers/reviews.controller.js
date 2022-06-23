// const Review = require("../models/Review.model");
//
// module.exports.reviewsController = {
//   postReview: async (req, res) => {
//     try {
//       const { text, grade } = req.body;
//
//       const review = await Review.create({ text, grade, user: req.user.id });
//
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   getAllReviews: async (req, res) => {
//     try {
//       const reviews = await Review.find().populate("user");
//       res.status(200).json(reviews);
//     } catch (e) {
//       res.status.json({
//         error: e.message,
//       });
//     }
//   },
//   getReviewById: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const review = await Review.findById(id).populate("user");
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   getReviewByUser: async (req, res) => {
//     try {
//       const review = await Review.find({ user: req.user.id }).populate("user");
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   getReviewsByGrade: async (req, res) => {
//     try {
//       const review = await Review.find({ grade: req.body.grade }).populate(
//         "user"
//       );
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   patchReviewById: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { text, grade } = req.body;
//
//       const review = await Review.findByIdAndUpdate(
//         id,
//         { text, grade },
//         { new: true }
//       );
//
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   patchReviewByUser: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { text, grade } = req.body;
//
//       const candidate = await Review.findById(id);
//
//       if (candidate.user.toString() === req.user.id) {
//         const review = await Review.findByIdAndUpdate(
//           id,
//           { text, grade },
//           { new: true }
//         );
//         return res.status(200).json(review);
//       }
//       res.status(200).json({
//         error: "Нет доступа",
//       });
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   deleteReviewById: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const review = await Review.findByIdAndDelete(id);
//       res.status(200).json(review);
//     } catch (e) {
//       res.status(404).json({
//         error: e.message,
//       });
//     }
//   },
//   deleteReviewByUser: async (req, res) => {
//     const { id } = req.params;
//
//     const candidate = await Review.findById(id);
//
//     if (candidate.user.toString() === req.user.id) {
//       await candidate.remove();
//       return res.status(200).json("Удалено");
//     }
//
//     res.status(401).json({
//       error: "Нет доступа",
//     });
//   },
// };

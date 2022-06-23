const Rend = require("../models/Rend.model")

module.exports.rendController = {
    postRend: async (req, res) => {
        try {
            const rend = await Rend.create({
                registrationDate: req.body.registrationDate,
                releaseDate: req.body.releaseDate,
            })
            res.json(rend)
        } catch (err) {
            res.status(404).json({
                error: err.message
            })
        }
    },

    getAllRends: async (req, res) => {
        try {
            const rends = await Rend.find({});

            res.status(200).json(rends);
        } catch (err) {
            res.status(200).json({
                error: err.message
            })
        }
    }
}
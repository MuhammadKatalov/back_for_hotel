const Rend = require("../models/Rend.model")
const Room = require("../models/Room.model");

module.exports.rendController = {
    postRend: async (req, res) => {
        try {

            const room = await Room.findById(req.params.roomId);

            const rend = await Rend.create({
                registrationDate: req.body.registrationDate,
                releaseDate: req.body.releaseDate,
                room: req.body.room,
                service: req.body.service,
                user: req.body.user
            }).populate('room')

            if (room.rented) {
                return res.json('Данный номер занят');
            }

            await Room.findByIdAndUpdate(req.params.roomId,
                {
                    rented: true
                })

            res.json(rend)
        } catch (err) {
            res.status(404).json({
                error: err.message
            })
        }
    },

    deleteRend: async (req, res) => {
        try {

            await Room.findByIdAndUpdate(req.params.roomId,
                {
                    rented: false
                })

            await Rend.findByIdAndDelete(req.params.rend);

            res.json('Бронь с номера снята');
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
    },

    changeRend: async (req, res) => {
        try {
            const changeRend = await Rend.findByIdAndUpdate(req.params.rendId, {
                registrationDate: req.body.registrationDate,
                releaseDate: req.body.releaseDate,
                service: req.body.service,
                user: req.body.user
            });
            res.json(changeRend);
        } catch (err) {
            res.status(200).json({
                error: err.message
            })
        }
    }
}
const Rend = require("../models/Rend.model");
const Room = require("../models/Room.model");
const User = require("../models/User.model");

module.exports.rendsController = {
    postRend: async (req, res) => {
        try {

            const room = await Room.findById(req.params.roomId);

            const rend = await Rend.create({
                registrationDate: req.body.registrationDate,
                releaseDate: req.body.releaseDate,
                room: req.params.roomId,
                service: req.body.service,
                user: req.user.id
            })

            if (room.rented) {
                return res.json({error: 'Данный номер занят'});
            }

            await Room.findByIdAndUpdate(req.params.roomId,
                {
                    rented: true
                })

            await User.findByIdAndUpdate(req.params.userId, {
                $push: {
                    booked: req.params.roomId
                }
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

            await User.findByIdAndUpdate(req.params.userId, {
                $pull: {
                    booked: req.params.roomId
                }
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
            const rends = await Rend.find({}).populate('room user');

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
    },

    getRendsByUserId: async (req, res) => {
        try {
            const rendByUser = await Rend.find({ user: req.params.userId }).populate('room');

            res.json(rendByUser);
        } catch (err) {
            res.status(200).json({
                error: err.message
            })
        }
    }
}
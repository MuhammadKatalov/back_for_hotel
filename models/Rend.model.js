const mongoose = require('mongoose');

const rendSchema = mongoose.Schema(
    {
        registrationDate: String,
        releaseDate: String,
        room: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Room'
        },
        service: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Service'
        }],
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        }
    }
)

const Rend = mongoose.model("Rend", rendSchema);

module.exports = Rend;
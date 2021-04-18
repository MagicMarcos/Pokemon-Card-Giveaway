const mongoose = require('mongoose')

const GiveawaySchema = new mongoose.Schema({
    cardName: {
        type: String,
        required: true,
    },
    cardValue: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Giveaway', GiveawaySchema)

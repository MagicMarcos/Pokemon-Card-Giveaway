const Giveaway = require('../models/Giveaway')

module.exports = {

    //Get 
    getCards: async (req, res) => {
        try {
            const cardGiveaway = await Giveaway.find()
            res.render('giveaway.ejs', { cards: cardGiveaway })
            
        } catch (err) {
            console.log(err)
            
        }
    },

    //Post -adds a new card
    addPokeCard: async (req, res) => {
        try {
            await Giveaway.create({ cardName: `. ` + req.body.cardName, cardValue: `$` + req.body.cardValue, count: 0 })

            console.log('Card has been added!')
            res.redirect('/giveaway')
        } catch (err) {
            console.log(err)
        }
    },

    //Put -adds one card
    addOneCard: async (req, res) => {
        try {
            await Giveaway.findOneAndUpdate({ _id: req.body.cardIdFromJsFile }, {
                count: req.body.countS + 1
            
            })
            console.log('Card Added')
            res.json('Card Added')
        } catch (err) {
            console.log(err)
        }
    },

    //PUT -subtracts one card
    removeOneCard: async (req, res) => {
        try {
            await Giveaway.findOneAndUpdate({ _id: req.body.cardIdFromJsFile }, {
                count: req.body.countS - 1
            })
            console.log('Card Removed')
            res.json('Card Removed')
        } catch (err) {
            console.log(err)
        }
    },

    //DELETE -deletes a card from list
    deleteCard: async (req, res) => {
        try {
            await Giveaway.findOneAndDelete({ _id:req.body.cardIdFromJSFile })
            console.log('Card Deleted')
            res.json('Deleted Card')
        } catch (err) {
            console.log(err)
        }
    }
}
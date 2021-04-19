const express = require('express')
const router = express.Router()
const giveawayController = require('../controllers/giveaway')

router.get('/', giveawayController.getCards)

router.post('/addPokeCard', giveawayController.addPokeCard)

router.put('/addOneCard', giveawayController.addOneCard)

router.put('/removeOneCard', giveawayController.removeOneCard)

router.delete('/deleteCard', giveawayController.deleteCard)

module.exports = router



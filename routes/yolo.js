const express = require('express')
const router = express.Router()
const yoloController = require('../controllers/yolo')

router.get('/', yoloController.getYolo)

module.exports = router
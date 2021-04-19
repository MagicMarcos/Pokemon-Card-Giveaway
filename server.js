const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const giveawayRoutes = require('./routes/giveaway')
const yoloRoutes = require('./routes/yolo')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/giveaway', giveawayRoutes)
app.use('/yolo', yoloRoutes)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running`)
})



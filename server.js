const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const giveawayRoutes = require('./routes/giveaway')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/giveaway', giveawayRoutes)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running`)
})







//////////OLD APP/////

// //Database Connection
// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'pokeCards'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })
    
// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// //Get 
// app.get('/',(request, response)=>{
//     db.collection('cards').find().sort({cardCount: -1}).toArray()
//     .then(data => {
//         response.render('index.ejs', { info: data })
//     })
//     .catch(error => console.error(error))
// })

// //Post -adds a new card
// app.post('/addPokeCard', (request, response) => {
//     db.collection('cards').insertOne({cardName: `. `+ request.body.cardName, cardValue: `$` + request.body.cardValue, count: 0})
//     .then(result => {
//         console.log('Pokemon Card Added')
//         response.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

// //Put -adds one card
// app.put('/addOneCard', (request, response) => {
//     db.collection('cards').updateOne({ cardName: request.body.cardNameS, cardValue: request.body.cardValueS,count: request.body.countS},{
//         $set: {
//             count:request.body.countS + 1
//           }
//     },{
//         sort: {_id: -1},
//         upsert: true
//     })
//     .then(result => {
//         console.log('Added One Card')
//         response.json('Card Added')
//     })
//     .catch(error => console.error(error))

// })

//PUT -subtracts one card
// app.put('/removeOneCard', (request, response) => {
//     db.collection('cards').updateOne({ cardName: request.body.cardNameS, cardValue: request.body.cardValueS, count: request.body.countS},{
//         $set: {
//             count:request.body.countS - 1
//         }
//     },{
//         sort: {_id: -1},
//         upsert: true
//     })
//     .then(result => {
//         console.log('Removed One Card')
//         response.json('Card Removed')
//     })
//     .catch(error => console.error)
// })

//DELETE -deletes a card from list
// app.delete('/deleteCard', (request, response) => {
//     db.collection('cards').deleteOne({ cardName: request.body.cardNameS})
//     .then(result => {
//         console.log('Card Deleted')
//         response.json('Card Deleted')
//     })
//     .catch(error => console.error(error))

// })


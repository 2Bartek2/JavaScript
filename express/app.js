const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRoutes = require ('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
app.use(bodyParser.urlencoded({extended : false}))

app.use(adminRoutes)
app.use(shopRoutes)
app.use((req,res,next) => {
    res.status(404).send('nie znaleziono strony')
})



app.listen(3000)
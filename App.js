const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { User } = require('./models/user')
const config = require('./config/key')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(config.mongoURI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false
}).then(() => console.log('DB connected'))
.catch(err => console.log(err))

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userData) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
})

/*
app.get('/', (req, res) =>{
    res.send('hello world')
})
*/

app.listen(port)

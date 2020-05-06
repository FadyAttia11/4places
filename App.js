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


//connecting to mongodb function
mongoose.connect(config.mongoURI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false
}).then(() => console.log('DB connected'))
.catch(err => console.log(err))


//signup function
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userData) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
})

//login function
app.post('/api/users/login', (req, res) => {
    //find the email
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) 
        return res.json ({
            loginSuccess: false,
            message: "Auth failed, email not found"
        })

        //compare password --here we will make comparePassword function in the user model
        user.comparePassword(req.body.passsword, (err, isMatch) => {
            if(!isMatch){
                return res.json ({ loginSuccess: false, message: "wrong password"})
            }
        })

        //generate Token
        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err)
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess: true
                })
        })
    })
})


app.listen(port)

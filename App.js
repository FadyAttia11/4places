const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false
}).then(() => console.log('DB connected'))
.catch(err => console.log(err))

/*
const bodyParser = require('body-parser')
app.use(bodyParser.json())
*/

app.get('/', (req, res) =>{
    res.send('hello world')
})

/*routes
const employee = require('./routes/employee')
app.use('./employee', employee)
*/

app.listen(port)

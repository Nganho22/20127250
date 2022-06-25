const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('combined'))

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

console.log(__dirname)

app.get('/', (req, res) => {
    res.render('home')
    //res.send('123')
})


app.get('/news', (req, res) => {
    res.render('news')
    //res.send('123')
})

app.get('/search', (req, res) => {
    //   console.log(req.query)
    res.render('search')
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.render('search')
})


//app.set('views', path.join(__dirname, 'resources/views'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const routes = require('./routes/router')
const session = require('express-session')

app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.json()) //! for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.get('/term', (req, res) => {
  res.render('term')
})

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('404 Page Not Found!')
})

app.listen(port, () => {
  console.log(`listening on Port: ${port}`)
})
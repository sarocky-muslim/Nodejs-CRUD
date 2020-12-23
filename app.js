const express = require('express')
const app = express()

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/', require('./routes'));
app.all('*', (request, response) => {
  response.send("404 Page Not Found");
});

// database connection
const mongoose = require('mongoose');
const uris = 'mongodb://localhost:27017/test';
const options = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false};
mongoose.connect(uris, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  // server connection
  const port = process.env.port || 3000
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })
});
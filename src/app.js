require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 3333;
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json()); // Config para receber JSON
app.use(routes); // usar rotas

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@cluster0.l7wg70n.mongodb.net/?retryWrites=true&w=majority`
)
  .then(() => {
    app.listen(port, () =>
      console.log(`🚀 Server started running on port: ${port}\n💾 Connected to database!`)
    );
  })
  .catch(error => {
    console.log(`⛔ ${error.message}`);
  })
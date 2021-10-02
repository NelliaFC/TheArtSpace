const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const sequelize = require("./config/config.js");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use(require('./controllers'));

//sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => 
  { app.listen(PORT, () => console.log(`Team cool server is up and running  on port ${PORT}!`))}
)


  
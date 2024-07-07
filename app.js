require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const allRoutes = require('./routes/authRoutes')
const authController = require('./controller/authController')
const {requireAuth,checkUser} = require('./middleware/authMiddleware')
const connectdb = require('./db')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

connectdb();
app.get('*', checkUser);
app.get("/", requireAuth ,authController.Home_get);
app.post("/", authController.HomeAddCoin_post);
app.use(allRoutes);

app.listen(process.env.PORT, () => {
    console.log('server is running');
});
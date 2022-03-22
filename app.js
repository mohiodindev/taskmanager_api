const path = require('path')
const express = require('express');
const app = express();
const router = require('./src/routes/router')
const PORT = process.env.PORT || 6544;


//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));
app.use('/' , router)
app.set("views", "views");
app.set("view engine", "hbs");







app.listen(PORT , ()=>{
    console.log(`Listnning at port ${PORT}...` )
});
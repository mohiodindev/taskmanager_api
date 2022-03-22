
const axios = require('axios');

const API_KEY = "e244b4d8de5a0515ef2380b42c4b0997"

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: 'Express Weather Finder'
    });
};

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=matric`
    axios.get(url).then((response)=>{
        res.render('index' , {
            weather:`its currently ${(response.data.main.temp-275)} in ${response.data.name}`
        })
    }).catch((error)=>{
        console.log(error.message)
    })
     
    
};

exports.renderAboutPage = (req, res) => {
    res.render("about", {
        title: 'Weather Finder'
    });
};
const express = require("express");
const router = express.Router();
const controler = require('../controlers/controler')

router.get('/',controler.renderHomePage);
router.post('/' , controler.getWeather)
router.get('/about',controler.renderAboutPage);



module.exports = router;


const express = require("express");
const {dataController} = require('./controllers/dataSavingController.js');

const router = express.Router();

router.route('/dataSavingLTP').post(dataController.saveData);

module.exports = router;

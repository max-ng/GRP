const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const moment = require('moment');
const config = require('./config/config'); // get database config
const responseUtils = require('./utils/responseUtils');
const helmet = require('helmet');
const app = express();
app.use(helmet());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/api', (req, res) => {
  res.json({message: 'General Route Planner' + config.version});
});
app.use('/api/route', require('./routes/route.js'));
app.listen(7000, () => {
  console.log(`[${moment().utc().format('YYYY-MM-DD HH:mm:ss')}] ` + `server (${config.version}) is running at Port 7000`);
});
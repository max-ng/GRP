//Max Ng Kei Sing 
'use strict';

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const moment = require('moment');
const validator = require('validator');
const config = require('../config/config');
const request = require('request');
var vm = require('vm');
var fs = require("fs");
vm.runInThisContext(fs.readFileSync('src/server11.js'));
var async = require('async');
const jwt = require('../utils/jwt');
const currency = { "HKD": 1 };
const truck = { '中型貨車': 1, '重型貨車': 2 };
const parcel = {
  '凍肉': 1,
  '建材': 2,
  '五金': 3,
  '家私': 4,
  '服裝': 5,
  '電子': 6,
  '其他請備註': 7,
};
const ourToken = '123';
// Create events for a single user
router.post('/multi', (req, res) => {
  console.log("dd",req.body);
  if (typeof req.body.token == 'string' && typeof req.body.pickups.isArray && typeof req.body.dropoffs.isArray) {
    const token = req.body.token;
    if (token != ourToken) {
      res.replyError('incorrect token');
      return;
    }
    const pickups = req.body.pickups;
    const dropoffs = req.body.dropoffs;
    const parcelLimit = req.body.parcelLimit;
    const timeLimit = req.body.timeLimit;
    var repeatLimit = 10;
    if (pickups.length != dropoffs.length) {
      res.replyError('pickup number is not equal to dropoff number');
      return;
    }
    if (pickups.length == 1 && dropoffs.length == 1) {
      repeatLimit = 1;
    }
    if (true) {

      var startTime = new Date();
      async.waterfall([
        function(callback) {
          var pre = preProcessing({"pickups":pickups, "dropoffs": dropoffs, "parcelLimit": parcelLimit, "timeLimit": timeLimit}, callback);
        },
        function(A, O, callback) {
          var timer = 0;
          var repeat = 0;
          var min = 999999999;
          var minpath= [];
          var each =[];
          //O.randomconnect();
          var randomconnect = O.firstgeneration(min, 1);
          for (var i = 0; i < 1000; i++) {
            timer++;
            var output = A.onegeneration(min, 1);


            if (output[1] == min) {
              repeat += 1;
              if (repeat == repeatLimit) {
                callback(null, [minpath, min, randomconnect[1]]);
                return;
              }
            } else {
              repeat = 0;
            }
            if (output[1] < min) {
              minpath = output[0];
              min = output[1];
              each = output[3];
            }
          }

          callback(null, [minpath, min, randomconnect[1]]);
          return;
        },
      ], function(err, result) {
        let time = (new Date() - startTime) / 1000;
       // console.log(result[1] , result[2] );
        console.log('time taken', time);
        //console.log('result', result);
        res.json({result:result, time: time });
      });
      /*
      eventData.createOrder(decoded.userId, truckType, createdDateTime, dropoffLocation, pickupLocation, dropoffDateTime, pickupDateTime,
        pickupLat, pickupLng, dropoffLat, dropoffLng, truckPortion, parcelType, price, currencyType, description, (rows) => {
          res.replySuccess('Event created', { eventId: rows.insertId });
        }, (err) => {
          res.replyError('Error executing query');
        });
      */
    }
  } else {
      res.replyError('error input');
    }
});

function preProcessing(options, callback) {
  var parcellimit = options["parcelLimit"];
  var timeLimit = options["timeLimit"];
  var pickups = options["pickups"];
  var dropoffs = options["dropoffs"];
  var u = "http://127.0.0.1:5000/table/v1/driving/";
  var s = "";
  var e = "";
  var d = "";
  var ddd = [];
  for (var k = 0; k < pickups.length; k++) {
    s += String(pickups[k][1]) + ',' + String(pickups[k][0]) + ';';
    e += String(dropoffs[k][1]) + ',' + String(dropoffs[k][0]) + ';';
  }
  e = e.substring(0, e.length - 1);
  for (var r = 0; r < pickups.length * 2; r++) {
    ddd.push(r);
  }


  async.mapSeries(ddd,
    (r, callback) => {
      let url = u + s + e + "?sources=" + String(r);
      request(url, function(error, response, result) {
          if (!error && response.statusCode == 200) {
            let f = JSON.parse(result)['durations'];
            callback(null, f[0]);
            //callback(null, r);
            //ddd = ddd.concat(f);
          }
        })
        //console.log(ddd);
        /*
        jQuery.ajax({
          ddd: ddd,
          url: u + s + e + "?sources=" + String(r),
          success: function(result) {
            var f = result['durations'];
            ddd = ddd.concat(f);
            if (result.isOk == false) console.log(result.message);
          },
          async: false
        })
        */
    },
    function(e, r) {
      ddd = r;
      var numberofpoint = ddd.length / 2;
      var www = new grp.matrix;
      var ww = www.map(numberofpoint * 2, numberofpoint * 2);
      for (var i = 0; i < numberofpoint; i++) {
        for (var j = 0; j < numberofpoint; j++) {
          ww[i][j] += 1 / (ddd[i][j] * 0.01 + 0.000005);
          ww[i][j + numberofpoint] += 1 / (ddd[i][j + numberofpoint] * 0.01 + 0.000005);
          ww[i + numberofpoint][j] += 1 / (ddd[i + numberofpoint][j] * 0.01 + 0.000005);
          ww[i + numberofpoint][j + numberofpoint] += 1 / (ddd[i + numberofpoint][j + numberofpoint] * 0.01 + 0.000005);
        }
      }
      var w = www.map(numberofpoint * 2, numberofpoint * 2);
      for (var i = 0; i < numberofpoint; i++) {
        for (var j = 0; j < numberofpoint; j++) {
          w[i][j] += ddd[i][j];
          w[i][j + numberofpoint] += ddd[i][j + numberofpoint];
          w[i + numberofpoint][j] += ddd[i + numberofpoint][j];
          w[i + numberofpoint][j + numberofpoint] += ddd[i + numberofpoint][j + numberofpoint];
        }
      }
      console.log('ddd',ddd);
      var A = new grp.map(pickups, dropoffs, ww, w, 1000, parcellimit,timeLimit);
      var O = new grp.map(pickups, dropoffs, ww, w, 1000, parcellimit,timeLimit);
      for (var e = 0; e < 1; e++) {
        O.randomconnect();
        var zzzz = A.weighting;
      }
      callback(null, A, O);
    });
}

module.exports = router;
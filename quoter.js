'use strict';

const request = require('request');
const baseUrl = 'https://www.alphavantage.co/query?';

require('dotenv').config();

const alpha = require('alphavantage')({ key: process.env.STOCK_APIKEY});


// exports.quote = function(req, res) {
// 	this.ticker = ticker;
// 	var url = baseUrl + 'function=TIME_SERIES_DAILY&symbol=' + this.ticker + '&apikey=' + process.env.STOCK_APIKEY;
// 	request(url, {json: true}, function(err, response){
// 		return res.send(response);
// 	});
// }

alpha.data.intraday('msft').then(data => {
	console.log(data);
});

// function quote(ticker) {
// 	var url = baseUrl + 'function=TIME_SERIES_INTRADAY&interval=60min&symbol=' + ticker + '&apikey=';
// 	request(url, {json: true}, function(err, response, body){
// 		parsedBody = JSON.parse(body);
// 		console.log(parsedBody);
// 	});
// }

// quote("AAPL");
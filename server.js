'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = new express();
const Quoter = require('./quoter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {SLACK_TOKEN: slackToken, PORT} = process.env
const baseUrl = 'https://www.alphavantage.co/query?';
require('dotenv').config();

const server = app.listen(3000, () => {
		console.log('Express server listening on port %d in %s mode', 
			server.address().port, 
			app.settings.env);
	});

// var url = baseUrl + 'function=TIME_SERIES_DAILY&symbol=MSFT&apikey=' 
// 			+ process.env.STOCK_APIKEY;

app.get('/', function(req, res){
	res.send('Working');
});

app.post('/', function(req, res){
	let ticker = req.body.text;
	let aa = Quoter.quote;
	res.send(aa);
	// res.send(tt);
	// let data = {
	//   response_type: 'ephemeral',
	//   text: text+': Found',
	//   attachments:[
	//     {
	//       image_url: 'https://http.cat/302.jpg'
	//     }
	// ]};
	// 
});

// let aa = Quoter.quote;
// console.log(quoter.quote("ABCD"));


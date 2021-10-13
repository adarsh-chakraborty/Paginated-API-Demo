if (!process.env.HEROKU) {
	require('dotenv').config();
}
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to mongodb (Hopefully). Starting Server...');
		app.listen(4000, () => {
			console.log('Listening on port: ' + PORT);
		});
	}
);

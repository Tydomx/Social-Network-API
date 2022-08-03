const express = require('express');
// importing mongoose
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// tells mongoose which DB we want to connect to. If env exists it'll use that.
// otherwise go to the local DB link
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/social-network-api', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


// use this to log mongo queries that're being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected to localhost:${PORT}`));
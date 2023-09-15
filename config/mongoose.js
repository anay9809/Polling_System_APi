const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO,{ useNewUrlParser: true,
    useUnifiedTopology: true});

// Code for using the cloud mongodb atlas 


// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', () => {
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;
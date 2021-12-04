const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const db = require("./db/conn");
const productRouter = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

// get driver connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    
});

app.use('/api', productRouter);
app.listen(port, () => {
    // perform a database connection when server starts
    // dbo.connectToServer(function(err) {
    //     if (err) console.error(err);

    // });
    console.log(`Server is running on port: ${port}`);
});
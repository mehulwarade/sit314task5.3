const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const Sensor = require('./models/sensor');
// Database Name
const dbName = 'sit314';
// Create a new MongoClient
const client = new MongoClient(url);


const app = express();
const port = 3000;
app.get('/', (req, res) => {
    calc = 0
    for (i = 0; i < 10000; i++) {
        calc += Math.random() * Math.random();
    }
    //console.log(calc);


    client.connect(function(err) {
        console.log("Connected successfully to server");
        
        const db = client.db(dbName);
  
        const newSensor = new Sensor({
          temperature: calc
      });
      
        db.collection("testnew").insertOne(newSensor);
        console.log(newSensor.temperature + "##############" + calc );
        //client.close();
      });

    res.send(calc.toFixed(10));
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
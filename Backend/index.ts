import Express from 'express';
const express = require('express');
const app = express();
const port = '3000';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cluster0.usnru.mongodb.net/myFirstDatabaseretryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseName = "cs4530proj";


app.get('/login', (req, res) => {
    const userName = req.username; 
    const userPass = req.password;
    try {
        client.connect(async (err) => {
            if(err) {
                console.log("Issue connecting with databse");
            }
            const data = await client.db(databaseName);
            const coll = await data.collection('Users');
            const findName = await coll.findOne({'username' : userName});
            if(findName != null) {
                findName['password'] == userPass ? res.status(200).json(findName['_id']) : res.status(400).send("Invalid Credentials")
            } 
            else {
                res.status(400).send("Username or Email already in use.");
            }
        });
    }
    catch(e) {
        res.status(500).send("Issue connecting to database");
    }
});

app.get('/signup', (req : Express.Request, res : Express.Response) => {
    const userName = req.username;
    const userEmail = req.email;
    const userPass = req.password; 
    try {
        client.connect(async (err) => {
            if(err) {
                console.log("Issue connecting with databse");
            }
            const data = await client.db(databaseName);
            const coll = await data.collection('Users');
            const findName = await coll.findOne({'username' : userName});
            const findEmail = await coll.findOne({'email' : userEmail});
            if(findName == null && findEmail == null) {
                const newDocId = require('mongodb').ObjectId().valueOf(); //will send this to frontend later
                const insertDoc = {_id: newDocId, 'username' : userName, 'password': userPass, 'email': userEmail};
                await coll.insertOne(insertDoc);
                res.status(200).send("Account Created!");
            } 
            else {
                res.status(400).send("Username or Email already in use.");
            }
        });
    }
    catch(e) {
        res.status(500).send("Issue connecting to database");
    }
    //{ acknowledged: true, deletedCount: 1 }
})

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
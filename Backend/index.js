"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = '3000';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cluster0.usnru.mongodb.net/myFirstDatabaseretryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseName = "Cluster0";


app.get('/login', (req, res) => {
    const userName = req.username;
    const userPass = req.password;
    try {
        client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.log("Issue connecting with databse");
            }
            const data = yield client.db(databaseName);
            const coll = yield data.collection('Users');
            const findName = yield coll.findOne({ 'username': userName });
            if (findName != null) {
                findName['password'] == userPass ? res.status(200).json(findName['_id']) : res.status(400).send("Invalid Credentials");
            }
            else {
                res.status(400).send("Username or Email already in use.");
            }
        }));
    }
    catch (e) {
        res.status(500).send("Issue connecting to database");
    }
});
app.get('/signup', (req, res) => {
    const userName = req.username;
    const userEmail = req.email;
    const userPass = req.password;
    try {
        client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.log("Issue connecting with databse");
            }
            const data = yield client.db(databaseName);
            const coll = yield data.collection('Users');
            const findName = yield coll.findOne({ 'username': userName });
            const findEmail = yield coll.findOne({ 'email': userEmail });
            if (findName == null && findEmail == null) {
                const newDocId = require('mongodb').ObjectId().valueOf(); //will send this to frontend later
                const insertDoc = { _id: newDocId, 'username': userName, 'password': userPass, 'email': userEmail };
                yield coll.insertOne(insertDoc);
                res.status(200).send("Account Created!");
            }
            else {
                res.status(400).send("Username or Email already in use.");
            }
        }));
    }
    catch (e) {
        res.status(500).send("Issue connecting to database");
    }
    //{ acknowledged: true, deletedCount: 1 }
});
app.get('/', (req, res) => {
    res.send('hello world!');
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

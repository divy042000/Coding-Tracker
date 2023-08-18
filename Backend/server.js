const express = require("express");
const cors =require('cors');
const session=require('express-session');
const app = express();
const mongoose=require('mongoose');
const cookieparsers = require('cookie-parser');
require("dotenv").config();
const axios =require('axios');


app.use(cors());
app.use(express.json());
app.use(cookieparsers());



async function getUser() {
    
    
}   

getUser();


app.listen(5000,()=>console.log("Sever running on the port " + 5000));
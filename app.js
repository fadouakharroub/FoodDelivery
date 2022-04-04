const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/AuthRoute');

const app = express();

 //middleware
app.use(express.json());


//database connection
mongoose.connect(
"mongodb://localhost/FoodDelivery"  
 
).then(()=>{console.log('conected')});

app.use('/',route);

app.listen(3000, () => {
  console.log("Server is running...");
});
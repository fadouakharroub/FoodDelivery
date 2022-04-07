const express = require("express");
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const connect = require("./connection/connect");

const adminRouter = require("./routes/AdminRoute");
const clientRouter = require("./routes/ClientRoute");
const managerRouter = require("./routes/ManagerRoute");

const MongoDbStore = mongoDbStore(session);
const sessionStore = new MongoDbStore({
  uri: "mongodb://localhost:27017",
  databaseName: "FoodDelivery",
  
});

app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: false,
    },
  })
);
app.use("/admin", adminRouter);
app.use("/client", clientRouter);
app.use("/manager", managerRouter);
app.use(function (error, req, res, next) {
  console.log(error);
  res.send({ message: "Oops something goes wrong!" });
});

connect()
  .catch((err) => {
    throw err;
  })
  .then(() => {
    app.listen(process.env.PORT, console.log("App is running"));
  });
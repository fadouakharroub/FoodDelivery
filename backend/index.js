const express = require("express");
const {
  authRouter,
  userRouter,
  secteurRouter,
  mealRouter,
  categoryRouter,
  orderRouter,
  restaurantRouter
} = require("./routes");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(cookieParser());
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:3000",'http://localhost:19006'],
  credentials: true,
};
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_DB);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);
app.use("/meal", mealRouter);
app.use("/secteur", secteurRouter);
app.use("/restaurant", restaurantRouter);

app.listen(process.env.PORT, () =>
  console.log(`server running in ${process.env.PORT} `)
);

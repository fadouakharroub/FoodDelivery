const authRouter = require('./auth-router')
const userRouter = require('./user-router')
const secteurRouter = require('./secteur-router')
const mealRouter = require('./meal-router')
const categoryRouter = require('./category-router')
const orderRouter = require('./order-router')
const restaurantRouter = require('./restaurant-router')
module.exports = {
  restaurantRouter,
  orderRouter,
  categoryRouter,
  mealRouter,
  secteurRouter,
  userRouter,
  authRouter
}
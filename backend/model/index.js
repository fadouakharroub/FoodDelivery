const userModel = require('./user-model')
const secteurModel = require('./secteur-model')
const mealModel = require('./meal-model')
const restaurantModel = require('./restaurant-model')
const categoryModel = require('./category-model')
const orderModel = require('./order-model')

module.exports = {
  orderModel,
  categoryModel,
  restaurantModel,
  mealModel,
  secteurModel,
  userModel,
}
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function UpdateMeal({
  CloseUpdatePopup,
  showUpdate,
  updatedMeal,
  Restaurants,
  Categorys}) {
  const [newMeal, setnewMeal] = useState({});
  const handelChange = (e) => {
    setnewMeal({ ...newMeal, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setnewMeal(updatedMeal);
  }, [showUpdate, CloseUpdatePopup]);
  const handelSubmit = () => {
    try {
      API.patch(`meal/${updatedMeal._id}`, newMeal).then(
        () => {
          CloseUpdatePopup();
        }
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
      console.log(error.message);
    }
  };
  return (
    <Modal
      show={showUpdate}
      onHide={CloseUpdatePopup}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update A Meal</Modal.Title>
      </Modal.Header>
      <form className="text-start">
        <Modal.Body>
          <div className="form-group">
            <label>Name :</label>
            <input
              type="text"
              onChange={handelChange}
              className="form-control mt-2"
              name="name"
              placeholder="Enter Meal Name"
              value={newMeal.name}
              required
            />
          </div>
          <div className="form-group">
            <label>Description :</label>
            <input
              type="text"
              onChange={handelChange}
              className="form-control mt-2"
              name="description"
              placeholder="Enter Meal Description"
              value={newMeal.description}
              required
            />
          </div>
          <div className="form-group">
            <label>Price :</label>
            <input
              type="number"
              onChange={handelChange}
              className="form-control mt-2"
              name="price"
              placeholder="Enter Meal Price"
              value={newMeal.price}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label>Category :</label>
            <select
              name="category"
              className="form-control mt-2"
              onChange={handelChange}
              required
            >
                 <option value={newMeal.category?._id}>
                {newMeal.category?.name}
              </option>
              {Categorys.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group mt-2">
            <label>Restaurant :</label>
            <select
              name="restaurant"
              className="form-control mt-2"
              onChange={handelChange}
              required
            >
                <option value={newMeal.restaurant?._id}>
                {newMeal.restaurant?.name}
              </option>
              {Restaurants.map((restaurant) => {
                return (
                  <option key={restaurant._id} value={restaurant._id}>
                    {restaurant.name}
                  </option>
                );
              })}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseUpdatePopup}>
            Close
          </Button>
          <Button onClick={() => handelSubmit()} variant="success">
            Update
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UpdateMeal;

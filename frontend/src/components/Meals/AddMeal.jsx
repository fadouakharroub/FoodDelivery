import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function AddMeal({ showAdd, CloseAddPopup, Restaurants, Categorys }) {
  const [meal, setMeal] = useState({});


  const [images, setImages] = useState([]);

  const handelChange = (e) => {
    e.preventDefault();
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };
 
  const handelImagesChange = (e) => {
    const fileListAsArray = Array.from(e.target.files);
    setImages((prev) => fileListAsArray);
  };

  const handelSubmit = () => {
    const data = new FormData();
    data.append("name", meal.name);
    data.append("description", meal.description);
    data.append("price", meal.price);
    data.append("restaurant", meal.restaurant);
    data.append("category", meal.category);
    images.map((image) => data.append("image", image));
    try {
      API.post(`meal`, data).then(() => {
        CloseAddPopup();
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
      console.log(error.message);
    }
  };
  return (
    <Modal
      show={showAdd}
      onHide={CloseAddPopup}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add A Meal</Modal.Title>
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
              required
            />
          </div>
          <div className="form-group mt-2">
            <label>Image :</label>
            <input
              type="file"
              onChange={handelImagesChange}
              className="form-control mt-2"
              name="image"
              placeholder="Enter Meal price"
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
          <Button variant="secondary" onClick={CloseAddPopup}>
            Close
          </Button>
          <Button onClick={() => handelSubmit()} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddMeal;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function AddRestaurant({ showAdd, CloseAddPopup, secteurs, Client, role }) {
  const [restaurant, setRestaurant] = useState({});


  const [images, setImages] = useState([]);

  const handelChange = (e) => {
    e.preventDefault();
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };
 
  const handelImagesChange = (e) => {
    const fileListAsArray = Array.from(e.target.files);
    setImages((prev) => fileListAsArray);
  };

  const handelSubmit = () => {
    const data = new FormData();
    data.append("name", restaurant.name);
    data.append("description", restaurant.description);
    data.append("secteur", restaurant.secteur);
    images.map((image) => data.append("image", image));
    try {
      API.post(`restaurant`, data).then(() => {
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
        <Modal.Title>Add A Restaurant</Modal.Title>
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
              placeholder="Enter Restaurant Name"
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
              placeholder="Enter Restaurant Description"
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
              placeholder="Enter Restaurant price"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label>Secteur :</label>
            <select
              name="secteur"
              className="form-control mt-2"
              onChange={handelChange}
              required
            >
              {secteurs.map((secteur) => {
                return (
                  <option key={secteur._id} value={secteur._id}>
                    {secteur.name}
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

export default AddRestaurant;

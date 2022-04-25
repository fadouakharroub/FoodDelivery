import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function AddCategory({ showAdd, CloseAddPopup }) {
  const [Category, setCategory] = useState({});

  const handelChange = (e) => {
    e.preventDefault();
    setCategory({ ...Category, [e.target.name]: e.target.value });
  };

  const handelSubmit = () => {
    try {
      API.post(`category`, Category).then(() => {
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
        <Modal.Title>Add A Category</Modal.Title>
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
              placeholder="Enter Category Name"
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
              placeholder="Enter Category description"
              required
            />
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

export default AddCategory;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function UpdateCategory({
  CloseUpdatePopup,
  showUpdate,
  updatedCategory,
}) {
  const [newCategory, setnewCategory] = useState({});
  const handelChange = (e) => {
    setnewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setnewCategory(updatedCategory);
  }, [showUpdate, CloseUpdatePopup,updatedCategory]);
  const handelSubmit = () => {
    try {
      API.patch(`category/${updatedCategory._id}`, newCategory).then(
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
        <Modal.Title>Update A Category</Modal.Title>
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
              value={newCategory.name}
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
              value={newCategory.description}
              required
            />
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

export default UpdateCategory;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function AddSecteur({ showAdd, CloseAddPopup,}) {
  const [Secteur, setSecteur] = useState({});



  const handelChange = (e) => {
    e.preventDefault();
    setSecteur({ ...Secteur, [e.target.name]: e.target.value });
  };
 


  const handelSubmit = () => {

    try {
      API.post(`secteur`,Secteur).then(() => {
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
        <Modal.Title>Add A Secteur</Modal.Title>
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
              placeholder="Enter Secteur Name"
              required
            />
          </div>
          <div className="form-group">
            <label>City :</label>
            <input
              type="text"
              onChange={handelChange}
              className="form-control mt-2"
              name="city"
              placeholder="Enter Secteur city"
              required
            />
          </div>
          <div className="form-group">
            <label>Address :</label>
            <input
              type="text"
              onChange={handelChange}
              className="form-control mt-2"
              name="address"
              placeholder="Enter Secteur city"
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

export default AddSecteur;

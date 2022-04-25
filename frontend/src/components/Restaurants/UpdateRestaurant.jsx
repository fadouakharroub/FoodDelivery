import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function UpdateRestaurant({
  CloseUpdatePopup,
  showUpdate,
  updatedRestaurant,
  secteurs,
}) {
  const [newRestaurant, setnewRestaurant] = useState({});
  const handelChange = (e) => {
    setnewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setnewRestaurant(updatedRestaurant);
  }, [showUpdate, CloseUpdatePopup]);
  const handelSubmit = () => {
    try {
      API.patch(`restaurant/${updatedRestaurant._id}`, newRestaurant).then(
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
        <Modal.Title>Update A Restaurant</Modal.Title>
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
              value={newRestaurant.name}
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
              value={newRestaurant.description}
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
              <option value={newRestaurant.secteur?._id}>
                {newRestaurant.secteur?.name}
              </option>
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

export default UpdateRestaurant;

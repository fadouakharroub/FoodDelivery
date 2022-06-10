import React from "react";
import {Modal,Button  } from "react-bootstrap";
import API from "../../Api";

function DeleteRestaurant({showDelete,CloseDeletePopup,id}) {
    const deleteRestaurant = () => {
        API.delete(`restaurant/${id}`).then((res) => {
          if (res.status === 200) {
            CloseDeletePopup();
          }
        });
    }
    return (
        <Modal show={showDelete} onHide={CloseDeletePopup} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete A Restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure You Want To Delete This Restaurant ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseDeletePopup}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteRestaurant}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )
}

export default DeleteRestaurant
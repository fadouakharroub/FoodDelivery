import React from "react";
import {Modal,Button  } from "react-bootstrap";
import API from "../../Api";

function DeleteMeal({showDelete,CloseDeletePopup,id}) {
    const deleteMeal = () => {
        API.delete(`meal/${id}`).then((res) => {
          if (res.status === 200) {
            CloseDeletePopup();
          }
        });
    }
    return (
        <Modal show={showDelete} onHide={CloseDeletePopup} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete A Meal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure You Want To Delete This Meal ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseDeletePopup}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteMeal}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )
}

export default DeleteMeal
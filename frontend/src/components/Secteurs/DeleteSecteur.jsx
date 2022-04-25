import React from "react";
import {Modal,Button  } from "react-bootstrap";
import API from "../../Api";

function DeleteSecteur({showDelete,CloseDeletePopup,id}) {
    const deleteSecteur = () => {
        API.delete(`secteur/${id}`).then((res) => {
          if (res.status === 200) {
            CloseDeletePopup();
          }
        });
    }
    return (
        <Modal show={showDelete} onHide={CloseDeletePopup} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete A Secteur</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure You Want To Delete This Secteur ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseDeletePopup}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteSecteur}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )
}

export default DeleteSecteur
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../Api";
function UpdateSecteur({
  CloseUpdatePopup,
  showUpdate,
  updatedSecteur,
}) {
  const [newSecteur, setnewSecteur] = useState({});
  const handelChange = (e) => {
    setnewSecteur({ ...newSecteur, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setnewSecteur(updatedSecteur);
  }, [showUpdate, CloseUpdatePopup]);
  const handelSubmit = () => {
    try {
      API.patch(`secteur/${updatedSecteur._id}`, newSecteur).then(
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
        <Modal.Title>Update A Secteur</Modal.Title>
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
              value={newSecteur.name}
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
              value={newSecteur.city}
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
              placeholder="Enter Secteur address"
              value={newSecteur.address}
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

export default UpdateSecteur;

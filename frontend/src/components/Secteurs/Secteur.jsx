import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../Api";
import DeleteSecteur from "./DeleteSecteur";
import {
  BsFillTrashFill,
  BsArrowRepeat,
  BsPlusSquareFill,
} from "react-icons/bs";
import UpdateSecteur from "./UpdateSecteur";
import AddSecteur from "./AddSecteur";

function Secteur() {
  const [DeleteId, setDeleteId] = useState("");
  const [updatedSecteur, setupdatedSecteur] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const ShowAddPopup = () => setShowAdd(true);
  const CloseAddPopup = () => setShowAdd(false);
  const [showDelete, setShowDelete] = useState(false);
  const ShowDeletePopup = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };
  const CloseDeletePopup = () => {
    setDeleteId("");
    setShowDelete(false);
  };
  const [showUpdate, setShowUpdate] = useState(false);
  const ShowUpdatePopup = (Secteur) => {
    setupdatedSecteur(Secteur);
    setShowUpdate(true);
  };
  const CloseUpdatePopup = () => {
    setupdatedSecteur("");
    setShowUpdate(false);
  };
  const [secteurs, setSecteurs] = useState([]);
  useEffect(() => {
    API.get(`secteur`).then((res) => {
      setSecteurs(res.data);
    });

  }, [showAdd, showDelete, showUpdate,]);
  return (
    <div className="w-100">
      <h3 className="m-3">
        Secteurs
        <Button className="float-end" onClick={ShowAddPopup}>
          Add <BsPlusSquareFill className="m-1" />
        </Button>
      </h3>
      <Table
        striped
        bSecteured
        hover
        size="sm"
        className="m-auto text-center"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {secteurs.map((secteur, key) => {
            return (
              <tr key={key}>
                <td>{secteur.name}</td>
                <td>{secteur.city}</td>
                <td>{secteur.address}</td>
                <td>
                  <BsFillTrashFill
                    className="m-2"
                    onClick={() => ShowDeletePopup(secteur._id)}
                  />
                  <BsArrowRepeat
                    className="m-2"
                    onClick={() => ShowUpdatePopup(secteur)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <UpdateSecteur
        showUpdate={showUpdate}
        CloseUpdatePopup={CloseUpdatePopup}
        updatedSecteur={updatedSecteur}
      />
      <DeleteSecteur
        showDelete={showDelete}
        CloseDeletePopup={CloseDeletePopup}
        id={DeleteId}
      />{" "}
      <AddSecteur
        showAdd={showAdd}
        CloseAddPopup={CloseAddPopup}
      />
    </div>
  );
}

export default Secteur;

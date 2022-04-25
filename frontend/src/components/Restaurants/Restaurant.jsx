import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../Api";
import DeleteRestaurant from "./DeleteRestaurant";
import {
  BsFillTrashFill,
  BsArrowRepeat,
  BsPlusSquareFill,
} from "react-icons/bs";
import UpdateRestaurant from "./UpdateRestaurant";
import AddRestaurant from "./AddRestaurant";

function Restaurant({ role, userId }) {
  const [DeleteId, setDeleteId] = useState("");
  const [updatedRestaurant, setupdatedRestaurant] = useState("");
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
  const ShowUpdatePopup = (Restaurant) => {
    setupdatedRestaurant(Restaurant);
    setShowUpdate(true);
  };
  const CloseUpdatePopup = () => {
    setupdatedRestaurant("");
    setShowUpdate(false);
  };
  const [Restaurants, setRestaurants] = useState([]);
  const [secteurs, setSecteurs] = useState([]);
  useEffect(() => {
    API.get(`restaurant`).then((res) => {
      setRestaurants(res.data);
    });
    API.get(`secteur`).then((res) => {
      setSecteurs(res.data);
    });

  }, [showAdd, showDelete, showUpdate, role, userId]);
  return (
    <div className="w-100">
      <h3 className="m-3">
        Restaurants
        <Button className="float-end" onClick={ShowAddPopup}>
          Add <BsPlusSquareFill className="m-1" />
        </Button>
      </h3>
      <Table
        striped
        bRestauranted
        hover
        size="sm"
        className="m-auto text-center"
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Secteur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Restaurants.map((restaurant, key) => {
            return (
              <tr key={key}>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + restaurant.image}
                    alt="img"
                  />
                </td>
                <td>{restaurant.name}</td>
                <td>{restaurant.description}</td>
                <td>{restaurant.secteur?.name}</td>
                <td>
                  <BsFillTrashFill
                    className="m-2"
                    onClick={() => ShowDeletePopup(restaurant._id)}
                  />
                  <BsArrowRepeat
                    className="m-2"
                    onClick={() => ShowUpdatePopup(restaurant)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <UpdateRestaurant
        showUpdate={showUpdate}
        CloseUpdatePopup={CloseUpdatePopup}
        updatedRestaurant={updatedRestaurant}
        secteurs={secteurs}
      />
      <DeleteRestaurant
        showDelete={showDelete}
        CloseDeletePopup={CloseDeletePopup}
        id={DeleteId}
      />{" "}
      <AddRestaurant
        showAdd={showAdd}
        CloseAddPopup={CloseAddPopup}
        secteurs={secteurs}
      />
    </div>
  );
}

export default Restaurant;

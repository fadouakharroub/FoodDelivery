import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"
import API from "../../Api";
import DeleteMeal from "./DeleteMeal";
import {
  BsFillTrashFill,
  BsArrowRepeat,
  BsPlusSquareFill,
} from "react-icons/bs";
import UpdateMeal from "./UpdateMeal";
import AddMeal from "./AddMeal";
import { addToCart } from "../cartSlice";

function Meal({ role, userId }) {
  const [DeleteId, setDeleteId] = useState("");
  const [updatedMeal, setupdatedMeal] = useState("");
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
  const ShowUpdatePopup = (Meal) => {
    setupdatedMeal(Meal);
    setShowUpdate(true);
  };
  const CloseUpdatePopup = () => {
    setupdatedMeal("");
    setShowUpdate(false);
  };
  const [Meals, setMeals] = useState([]);
  const [Restaurants, setRestaurants] = useState([]);
  const [Categorys, setCategorys] = useState([]);

  const dispatch = useDispatch();
  const handleAddToCart = (food) =>{

dispatch(addToCart(food));
  }

  useEffect(() => {
    API.get(`meal`).then((res) => {
      setMeals(res.data);
    });
    API.get(`restaurant`).then((res) => {
      setRestaurants(res.data);
    });
    API.get(`category`).then((res) => {
      setCategorys(res.data);
    });

  }, [showAdd, showDelete, showUpdate, role, userId]);
  return (
    <div className="w-100">
      <h3 className="m-3">
        Meals
        <Button className="float-end" onClick={() => handleAddToCart(food)}>
          Add To Cart <Cart></Cart> <BsPlusSquareFill className="m-1" />
        </Button>
        <Button className="float-end" onClick={ShowAddPopup}>
          Add <BsPlusSquareFill className="m-1" />
        </Button>
      </h3>
      <Table
        striped
        bMealed
        hover
        size="sm"
        className="m-auto text-center"
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Restaurant</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Meals.map((meal, key) => {
            return (
              <tr key={key}>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + meal.image}
                    alt="img"
                  />
                </td>
                <td>{meal.name}</td>
                <td>{meal.description}</td>
                <td>{meal.price} Dh</td>
                <td>{meal.restaurant?.name}</td>
                <td>{meal.category?.name}</td>
                <td>
                  <BsFillTrashFill
                    className="m-2"
                    onClick={() => ShowDeletePopup(meal._id)}
                  />
                  <BsArrowRepeat
                    className="m-2"
                    onClick={() => ShowUpdatePopup(meal)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <UpdateMeal
        showUpdate={showUpdate}
        CloseUpdatePopup={CloseUpdatePopup}
        updatedMeal={updatedMeal}
        Restaurants={Restaurants}
        Categorys={Categorys}
      />
      <DeleteMeal
        showDelete={showDelete}
        CloseDeletePopup={CloseDeletePopup}
        id={DeleteId}
      />{" "}
      <AddMeal
        showAdd={showAdd}
        CloseAddPopup={CloseAddPopup}
        Restaurants={Restaurants}
        Categorys={Categorys}
      />
    </div>
  );
}

export default Meal;

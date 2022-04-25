import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../Api";
import DeleteCategory from "./DeleteCategory";
import {
  BsFillTrashFill,
  BsArrowRepeat,
  BsPlusSquareFill,
} from "react-icons/bs";
import UpdateCategory from "./UpdateCategory";
import AddCategory from "./AddCategory";

function Category() {
  const [DeleteId, setDeleteId] = useState("");
  const [updatedCategory, setupdatedCategory] = useState("");
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
  const ShowUpdatePopup = (Category) => {
    setupdatedCategory(Category);
    setShowUpdate(true);
  };
  const CloseUpdatePopup = () => {
    setupdatedCategory("");
    setShowUpdate(false);
  };
  const [Categorys, setCategorys] = useState([]);
  useEffect(() => {
    API.get(`category`).then((res) => {
      setCategorys(res.data);
    });

  }, [showAdd, showDelete, showUpdate,]);
  return (
    <div className="w-100">
      <h3 className="m-3">
        Categorys
        <Button className="float-end" onClick={ShowAddPopup}>
          Add <BsPlusSquareFill className="m-1" />
        </Button>
      </h3>
      <Table
        striped
        bCategoryed
        hover
        size="sm"
        className="m-auto text-center"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Categorys.map((category, key) => {
            return (
              <tr key={key}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <BsFillTrashFill
                    className="m-2"
                    onClick={() => ShowDeletePopup(category._id)}
                  />
                  <BsArrowRepeat
                    className="m-2"
                    onClick={() => ShowUpdatePopup(category)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <UpdateCategory
        showUpdate={showUpdate}
        CloseUpdatePopup={CloseUpdatePopup}
        updatedCategory={updatedCategory}
      />
      <DeleteCategory
        showDelete={showDelete}
        CloseDeletePopup={CloseDeletePopup}
        id={DeleteId}
      />{" "}
      <AddCategory
        showAdd={showAdd}
        CloseAddPopup={CloseAddPopup}
      />
    </div>
  );
}

export default Category;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, image, value, brand, stock, category, id }) => {

  const navigate = useNavigate()

  async function deleteProduct() {
    const response = await fetch(`http://localhost:4000/api/store/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.message === "Product deleted") {
      window.location.reload(true);
    }
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="part" className="rounded-xl hover:cursor-pointer" onClick={() => navigate({
            pathname: "/editproduct",
            search: `?id=${id}`
          })}/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <ul>
            <li>Category: {category}</li>
            <li>Value: {value}</li>
            <li>Brand: {brand}</li>
            <li>Stock: {stock}</li>
          </ul>
          <div className="card-actions m-3">
            <button className="btn btn-success">Buy</button>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("deleteModal").showModal()}
            >
              Delete
            </button>
            <dialog
              id="deleteModal"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Delete product</h3>
                <p className="py-4">
                  Are you sure you want to delete the product?
                </p>
                <div className="modal-action">
                  <button
                    className="btn btn-success"
                    onClick={() => deleteProduct()}
                  >
                    Confirm
                  </button>
                  <button className="btn">Cancel</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

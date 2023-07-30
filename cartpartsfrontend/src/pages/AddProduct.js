import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [errorResponse, setErrorResponse] = useState("");
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function addProduct(dataForm) {
    const response = await fetch("http://localhost:4000/api/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json()
    if(data.message === "Product created") {
      navigate("/products")
    }else {
      setErrorResponse(data.message)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-base-200 p-16" data-theme="autumn">
        <div className="text-center p-5">
          <h1 className="text-4xl font-bold">Add Product</h1>
        </div>
        <form
          className="grid gap-x-8 gap-y-4 grid-cols-1 justify-items-center p-5 sm:grid-cols-3"
          onSubmit={handleSubmit(addProduct)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
              name="name"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="category"
              id="category"
              {...register("category", {
                required: true,
              })}
            >
              <option>
                Select the category of part
              </option>
              <option value="Motors">Motors</option>
              <option value="Batteries">Batteries</option>
              <option value="Brakes">Brakes</option>
              <option value="Suspensions and shock absorbers">
                Suspensions and shock absorbers
              </option>
              <option value="Radiators and coolers">
                Radiators and coolers
              </option>
            </select>
            {errors.category?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="brand"
              className="input input-bordered w-full max-w-xs"
              name="brand"
              id="brand"
              {...register("brand", {
                required: true,
              })}
            />
            {errors.brand?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="image"
              id="image"
              {...register("image", {
                required: true,
              })}
            />
            {errors.image?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Value</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="value"
              id="value"
              {...register("value", {
                required: true,
                pattern: /[0-9]/,
              })}
            />
            {errors.value?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
            {errors.value?.type === "pattern" && (
              <div className="text-danger">
                <small>Only numbers.</small>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="stock"
              id="stock"
              {...register("stock", {
                required: true,
                pattern: /[0-9]/,
              })}
            />
            {errors.stock?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
            {errors.stock?.type === "pattern" && (
              <div className="text-danger">
                <small>Only numbers.</small>
              </div>
            )}
          </div>
          <button
            className="btn btn-active btn-ghost col-span-1 sm:col-span-3 m-5"
            type="submit"
          >
            Create Product
          </button>
          {errorResponse !== "Product created" && (
            <div className="text-center text-danger p-2">
              <p className="fs-6">{errorResponse}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AddProduct;

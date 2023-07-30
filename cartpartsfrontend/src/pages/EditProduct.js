import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const EditProduct = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [errorResponse, setErrorResponse] = useState();
  const [product, setProduct] = useState({});
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `http://localhost:4000/api/store/${searchParams.get("id")}`
      );
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  async function editProduct(dataForm) {
    const response = await fetch(`http://localhost:4000/api/store/${product._id}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dataForm)
    })
    const data = await response.json()
    if (data.message === "Product updated") {
      navigate("/products")
    }else {
      setErrorResponse(data.message)
    }
  }

  return (
    <>
      <div className="flex bg-base-200" data-theme="autumn">
        <button
          className="btn btn-active btn-ghost sm:col-span-3 m-5"
          onClick={() => navigate("/products")}
        >
          Go back
        </button>
      </div>
      <div className="hero min-h-screen bg-base-200" data-theme="autumn">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.image}
            className="max-w-md rounded-md shadow-2xl m-3"
            alt="product"
          />
          <div>
            <h1 className="text-5xl font-bold">Edit Product</h1>
            <form
              className="grid gap-x-8 gap-y-4 grid-cols-1 justify-items-center p-5 sm:grid-cols-3"
              onSubmit={handleSubmit(editProduct)}
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={product.name}
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  id="name"
                  {...register("name", {
                    value: product.name
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  defaultValue={product.category}
                  className="select select-bordered w-full max-w-xs"
                  name="category"
                  id="category"
                  {...register("category", {
                    value: product.category
                  })}
                >
                  <option>Select the category of part</option>
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
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  defaultValue={product.brand}
                  className="input input-bordered w-full max-w-xs"
                  name="brand"
                  id="brand"
                  {...register("brand", {
                    value: product.brand
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  defaultValue={product.image}
                  className="input input-bordered w-full max-w-xs"
                  name="image"
                  id="image"
                  {...register("image", {
                    value: product.image
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Value</span>
                </label>
                <input
                  type="text"
                  defaultValue={product.value}
                  className="input input-bordered w-full max-w-xs"
                  name="value"
                  id="value"
                  {...register("value", {
                    pattern: /[0-9]/,
                    value: product.value
                  })}
                />
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
                  defaultValue={product.stock}
                  className="input input-bordered w-full max-w-xs"
                  name="stock"
                  id="stock"
                  {...register("stock", {
                    pattern: /[0-9]/,
                    value: product.stock
                  })}
                />
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
                Edit product
              </button>
              {errorResponse !== "Product created" && (
                <div className="text-center text-danger p-2">
                  <p className="fs-6">{errorResponse}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;

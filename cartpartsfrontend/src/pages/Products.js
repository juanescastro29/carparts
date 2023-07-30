import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:4000/api/store`);
      const data = await response.json();
      setProducts(data.slice(6 * (page - 1), 6 * page));
    }
    fetchProducts();
  }, [page]);

  return (
    <>
      {products.length > 0 ? (
        <div className="flex bg-base-200" data-theme="autumn">
          <Cards data={products} />
        </div>
      ) : (
        <div className="hero min-h-screen bg-base-200" data-theme="autumn">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">No more products to show.</h1>
              <p className="py-6">
                Thank you for your understanding, and we look forward to serving
                you with even more products in the future!
              </p>
            </div>
          </div>
        </div>
      )}
      {console.log(products.length)}
      <div className="flex justify-center bg-base-200" data-theme="autumn">
        <div className="join m-5" data-theme="autumn">
          {page > 1 ? (
            <button className="join-item btn" onClick={() => setPage(page - 1)}>
              «
            </button>
          ) : (
            <button className="join-item btn">«</button>
          )}
          <button className="join-item btn">Page {page}</button>
          {page >= 1 && products.length > 0 ? (
            <button className="join-item btn" onClick={() => setPage(page + 1)}>
              »
            </button>
          ) : (
            <button className="join-item btn">»</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

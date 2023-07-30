import React from "react";
import PartOne from "../assets/partone.jpg";
import PartTwo from "../assets/parttwo.jpg";
import PartThree from "../assets/partthree.jpg";
import PartFour from "../assets/partfour.jpg";
import PartFive from "../assets/partfive.jpg";
import PartSix from "../assets/partsix.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="hero min-h-screen bg-base-200 p-20" data-theme="autumn">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-96 carousel rounded-box h-96 ms-5">
            <div className="carousel-item h-full w-full">
              <img src={PartTwo} alt="part" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={PartOne} alt="part" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={PartThree} alt="part" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={PartFour} alt="part" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={PartFive} alt="part" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={PartSix} alt="part" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Car Parts Store</h1>
            <p className="py-6">
              Welcome to our auto parts store, the ultimate destination for car
              enthusiasts and mechanics alike! In our establishment, you will
              find a wide range of products and services to meet all your
              vehicle-related needs.
            </p>
            <button className="btn btn-ghost" onClick={() => navigate("/products")}>View Products</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

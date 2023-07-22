import React from "react";
import { useState } from "react";
import bannerImage from "../assets/banner.jpg";
import aboutImage from "../assets/image1.png";
import WhyUsSection from './whyus'
import "../styles.css";
import DiversitySection from "./leadership";

const CareerPage = () => {
  const [expandedCountry, setExpandedCountry] = useState(null);

  const countries = [
    {
      id: 1,
      name: " India",
      cities: ["Mumbai", "Delhi", "Bangalore"],
    },
    {
      id: 2,
      name: " America",
      cities: ["New York", "San Francisco", "Los Angeles"],
    },
    {
      id: 3,
      name: " Asia Pacific",
      cities: ["Singapore", "Tokyo", "Sydney"],
    },
    {
      id: 4,
      name: " Europe & UK",
      cities: ["London", "Paris", "Berlin"],
    },
    {
      id: 5,
      name: " Middle East & Africa",
      cities: ["Dubai", "Cairo", "Johannesburg"],
    },
  ];

  const toggleExpandCountry = (countryId) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId);
  };
  {
    /*const ulClassName = expandedCountry ? "ml-8 expanded" : "ml-8";*/
  }

  return (
    <div className="bg-gray-100">
      {/* Banner section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mbb-4 text-blue-600">
            Build a Future You Believe In
          </h1>
          <button className="py-3 pxq-6 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Apply Now
          </button>
        </div>
      </div>
      <div className="bg-02182d text-white py-16 flex">
        {/* Left half of the screen */}
        <div className="w-1/2 p-8">
          <h2 className="text-lg font-bold mb-4-1">About Us</h2>
          <h1 className="text-4xl font-bold mb-4-1">
            Shape the Future of Technology
          </h1>
          <p className="mb-8">
            As a global company with unparalleled scale, a track record of
            pioneering innovation, and a huge and influential client base, we
            offer associates a chance to drive change and improve the lives of
            millions of people around the world.
          </p>
        </div>
        {/* Right half of the screen */}
        <div className="w-1/2">
          <img src={aboutImage} alt="About Us" className="white-full h-full" />
        </div>
      </div>

      {/* Offices Country and Locations Section */}
      <div className="bg-whiteeeee py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/*<h2 className="text-3xl font-bold mb-4-cl1">
            Offices Country & Locations
  </h2>*/}
          {countries.map((country) => (
            <div key={country.id} className="mb-4-cl1">
              {/* Country Name */}
              <div
                className="flex-container cursor-pointer"
                onClick={() => toggleExpandCountry(country.id)}
              >
                <span
                  className={`text-xl font-bold mr-2 ${country.id === 1 || 2 || 3 || 4 || 5 ? "blue-index" : ""
                    }`}
                >
                  {country.id.toString().padStart(2, "0")}.&nbsp;
                </span>
                <span className="city-name text-xl font-bold">
                  {country.name}
                </span>
                <span className="ml-2 plus-icon">
                  {expandedCountry === country.id ? "-" : "+"}
                </span>
              </div>
              {/* Expandable City Names */}
              {/* Expandable City Names */}
              <ul
                className={
                  expandedCountry === country.id
                    ? "ul-expand ml-8"
                    : "ul-collapse ml-8"
                }
              >
                {country.cities.map((city) => (
                  <li key={city} className="mb-2">
                    {city} - <a href="#">View Career Page</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <WhyUsSection />
      <DiversitySection />
    </div>
  );
};

export default CareerPage;

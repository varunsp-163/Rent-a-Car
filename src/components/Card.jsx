import React from "react";
import img from "../assets/bmw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGasPump,
  faGauge,
  faPerson,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  return (
    <div className="bg-[#e6f7ff] shadow-lg rounded-[30px] overflow-hidden m-4 w-[400px]">
      <div className="rounded-xl">
        <img
          src={img}
          alt="car image"
          className="w-full h-[260px] object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between mt-2">
          <h1 className="text-2xl font-mono font-semibold">{data.name}</h1>
          <p className="text-gray-600 font-bold border-dashed border-2 border-blue-300 rounded-xl px-4 py-1">
            {data.manufacture_year}
          </p>
        </div>
        <div className="p-3 text-sm font-semibold">
          <div className="mt-2 flex justify-between">
            <p className="text-gray-600">
              <span className="pr-1">
                <FontAwesomeIcon icon={faPerson} style={{ color: "#527dc7" }} />
              </span>
              {data.number_of_seats} People
            </p>
            <span className=" text-gray-600 ">
              <span className="pr-1">
                <FontAwesomeIcon
                  icon={faGasPump}
                  style={{ color: "#557ab9" }}
                />
              </span>
              {data.fuel_type}
            </span>
          </div>
          <div className="mt-2 flex justify-between">
            <h1 className="text-gray-600">
              <span className="pr-1">
                <FontAwesomeIcon icon={faGauge} style={{ color: "#5f86c8" }} />
              </span>
              {data.mileage}
            </h1>
            <h1 className="text-gray-600">
              <span className="pr-1">
                <FontAwesomeIcon icon={faGear} style={{ color: "#6992d8" }} />
              </span>
              {data.transmission_type}
            </h1>
          </div>
        </div>
        <hr className="border-t-2 border-gray-400" />

        <div className="mt-4 flex justify-between">
          <p className="text-lg font-semibold">
            <span className="text-2xl font-bold">${data.rent_per_month}</span>
            <span className="text-sm p-1">/ month</span>
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-200 rounded-xl shadow-sm border-1 p-2">
              <FontAwesomeIcon
                icon={faHeart}
                className="p-1"
                style={{ color: "#5a84ce" }}
              />
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { getCars } from "../api/Cars";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

const Cards = () => {
  const { page } = useParams();
  const allCars = getCars();

  const searchTerm = useSelector((state) => state.search);
  const filteredCars = allCars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const recordsPerPage = 6;
  const firstIndex = (currentPage - 1) * recordsPerPage;

  const totalPages = Math.ceil(filteredCars.length / recordsPerPage);
  const records = filteredCars.slice(firstIndex, firstIndex + recordsPerPage);

  const navigate = useNavigate();

  const prePage = () => {
    if (currentPage > 1) {
      navigate(`/page/${currentPage - 1}`);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/page/${currentPage + 1}`);
    }
  };

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page, searchTerm]);

  return (
    <>
      <div className="flex flex-wrap p-4 m-3 justify-around">
        {records.map((car) => (
          <Card key={car.id} data={car} />
        ))}
      </div>
      <div className=" justify-between gap-5 flex flex-wrap m-5 p-4 bg-[#e6f7ff] rounded-md shadow-xl">
        <div className="my-4 justify-center text-center">
          <span className="font-semibold text-xl">
            {currentPage} from {totalPages}
          </span>
        </div>
        <div className="flex justify-center flex-wrap">
          <button
            className="bg-white rounded-md hover:bg-gray-200 p-4"
            onClick={prePage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              rotation={180}
              style={{ color: "#608ad2" }}
            />
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <Link
              to={`/page/${page + 1}`}
              key={page}
              className={`${
                currentPage === page + 1
                  ? "bg-blue-500 text-white m-2 rounded-md"
                  : "bg-white text-blue-500 m-2 rounded-md hover:bg-blue-100"
              } py-2 px-4`}
            >
              {page + 1}
            </Link>
          ))}
          <button
            className="bg-white rounded-md hover:bg-gray-200 p-4"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#608ad2" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;

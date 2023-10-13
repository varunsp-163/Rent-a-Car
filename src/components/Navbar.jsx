import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../reducers/searchSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const searchTermRedux = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTermRedux);

  const handleSearchInputChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(localSearchTerm));
    navigate("/page/1")
  };

  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const handleLogin = () => {
    navigate("/");
    setClicked(false);
  };

  return (
    <>
      <div className="flex m-5 p-4 gap-4 bg-[#e6f7ff] rounded-2xl shadow-lg">
        <div className="flex rounded-3xl bg-white">
          <input
            type="text"
            className="py-2 pl-6 rounded-l-3xl"
            placeholder="Search"
            value={localSearchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="pr-3" onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              onClick={() => navigate("/page/1")}
            />
          </button>
        </div>
        <div className="flex gap-4 pt-2 text-gray-700">
          <a href="#">
            Relevance
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </a>
          <a href="#">
            All brands
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </a>
        </div>
        {clicked && (
          <button className="p-2" onClick={handleLogin}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        )}
      </div>
      <div className="text-center p-2 animate-bounce">
        {!clicked && (
          <div>
            <h1 className="p-6 font-semibold text-xl font-mono">
              Empowering Your Car Buying Journey
            </h1>
            <Link
              to="/page/1"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClicked}
            >
              Checkout Cars
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

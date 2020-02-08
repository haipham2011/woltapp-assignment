import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../actions/actions";
import SortController from "../sortcontroller";
import ResContainer from "./ResContainer";
import { heading } from "./config";

const Restaurants = () => {
  const { restaurants, sort, page } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div className="restaurants" datatest="Restaurants">
      <div className="d-flex justify-content-center">
        <h3>{heading}</h3>
      </div>
      <SortController />
      <ResContainer {...{ restaurants, sort, page }} />
    </div>
  );
};

export default Restaurants;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SortContainer from "./SortContainer";

const SortController = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(state => state);

  return (
    <div className="sortController" datatest="SortController">
      <SortContainer {...{ dispatch, sort }} />
    </div>
  );
};

export default SortController;

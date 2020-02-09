import React from "react";
import { useSelector } from "react-redux";
import SuggestContainer from "./SuggestContainer";
import './style.css';

const Suggestions = () => {
  const { restaurants } = useSelector(state => state);

  return (
    <div className="suggestions" datatest="Suggestions">
      <SuggestContainer {...{ restaurants }} />
    </div>
  );
};

export default Suggestions;

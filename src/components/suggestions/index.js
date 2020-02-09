import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestContainer from "./SuggestContainer";
import { useSuggest } from "./SuggestFunc";

import './style.css';

const Suggestions = () => {
  const { restaurants } = useSelector(state => state);
  const { suggestions, suggestLocation } = useSuggest();

  useEffect(() => {
    suggestLocation(restaurants)
  }, [restaurants, suggestLocation]);

  return (
    <div className="suggestions" datatest="Suggestions">
      <SuggestContainer {...{ suggestions }} />
    </div>
  );
};

export default Suggestions;

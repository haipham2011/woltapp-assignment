import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuggestContainer from "./SuggestContainer";
import { suggestLocation } from "./SuggestFunc";

const Suggestions = () => {
  const { suggestions } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    suggestLocation(dispatch);
  }, [dispatch, suggestions]);

  return (
    <div className="suggestions" datatest="Suggestions">
      <SuggestContainer {...{ suggestions }} />
    </div>
  );
};

export default Suggestions;

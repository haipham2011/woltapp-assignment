import React from "react";
import { Form } from "react-bootstrap";
import { setSort } from "../../actions/actions";
import { sortConfig } from "./config";
import PropTypes from "prop-types";

const OptionContainer = ({ dispatch, sort }) => {
  const handleChange = e => {
    dispatch(setSort(e.target.value));
  };
  return (
    <Form.Control
      as="select"
      onChange={handleChange}
      datatest="OptionContainer"
    >
      {sortConfig.map((element, index) => {
        return (
          <option value={element.type} key={index} datatest="option">
            {sort === element.type ? "Sort by: " : ""} {element.content}
          </option>
        );
      })}
    </Form.Control>
  );
};

OptionContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sort: PropTypes.string
};

export default OptionContainer;

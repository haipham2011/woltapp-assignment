import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../Utils";
import FooterContainer from "../../components/footer/FooterContainer";

describe("FooterContainer test", () => {
  const setUp = () => {
    const component = shallow(<FooterContainer />);
    return component;
  };
  const component = setUp();

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "FooterContainer");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a image IOS", () => {
    const wrapper = findByTestAtrr(component, "image");
    expect(wrapper.length).toBe(2);
  });
});

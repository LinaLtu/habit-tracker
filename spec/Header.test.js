import React from "react";
import { render } from "enzyme";
import Header from "../components/Header";

describe("Header", () => {
  it("renders according to the design");
  const component = render.create(<Header />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

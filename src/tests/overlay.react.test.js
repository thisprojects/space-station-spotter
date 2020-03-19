import React from "react";
import OverLay, {
  Errors,
  GeoCode,
  InputAndButton,
} from "../components/overlay-components";
import renderer from "react-test-renderer";

test("Errors Matches Snapshot", () => {
  const component = renderer.create(<Errors />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Overlay Matches Snapshot", () => {
  const component = renderer.create(<OverLay />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("GeoCode Matches Snapshot", () => {
  const component = renderer.create(<GeoCode />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Location Input and Button Matches Snapshot", () => {
  const component = renderer.create(<InputAndButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});



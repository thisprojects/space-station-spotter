import React from "react";
import DisplayResults, {
  MapResults,
  ChooseAnotherLocation,
  unixTimeConverter
} from "../components/results";
import renderer from "react-test-renderer";
import { mockedResultsArray } from "./mocked-results.js";

test("Unix Time Conversion", () => {
  let x = unixTimeConverter(1580051829);
  expect(x).toEqual(" 26 / Jan / 2020  at  15:17:09");
});

test("MapResults Matches Snapshot", () => {
  const component = renderer.create(
    <MapResults results={mockedResultsArray} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("DisplayResults Matches Snapshot", () => {
  const component = renderer.create(
    <DisplayResults results={mockedResultsArray} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Choose Another Location Matches Snapshot", () => {
  const component = renderer.create(<ChooseAnotherLocation />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

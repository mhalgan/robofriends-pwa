import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("render MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: "John", email: "john@gmail.com" }],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots().length).toEqual(1);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: "John", email: "john@gmail.com" }],
    searchField: "a",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it("test pending", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: "John", email: "john@gmail.com" }],
    searchField: "a",
    isPending: true
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.find('[id="loading"]').text()).toBe("Loading");
});

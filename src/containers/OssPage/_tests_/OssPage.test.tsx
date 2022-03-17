import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadarContextProvider } from "../../../components/RadarContextProvider/RadarContextProvider";
import OssPage from "../OssPage";
import { BrowserRouter as Router } from "react-router-dom";

window.scroll = jest.fn();

describe("OssPage", () => {
  it("should render OssPage component", () => {
    const { container } = render(
      <Router>
        <RadarContextProvider>
          <OssPage />
        </RadarContextProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

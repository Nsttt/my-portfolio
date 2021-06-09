import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/index";
import { getGallery, getHeroProject } from "../../services/project.service";
import { galleryFixture, heroProjectFixture } from "../../fixtures";

jest.mock("../../services/project.service");

jest.mock("../../services/apolloClient.service", () => jest.fn());
jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

describe("Homepage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the dashboard with all the content displayed correctly", () => {
    getGallery.mockReturnValue(() => ({ projects: galleryFixture }));
    getHeroProject.mockReturnValue(() => ({
      heroProject: heroProjectFixture,
    }));
    const { getByText } = render(<Home />);
    expect(document.title).toEqual("Home | NSTlopez");
  });
});

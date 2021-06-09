/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Header } from "../../components";
import "jest-styled-components";

describe("Header component", () => {
  let expectedProps;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders entire component without any issue", () => {
    const { container } = render(
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/android-chrome-192x192.png" />
            <Header.Title />
            <Header.TextLink href="/">Home</Header.TextLink>
            <Header.TextLink href="/portfolio">Portfolio</Header.TextLink>
            <Header.TextLink href="/about">About</Header.TextLink>
            <Header.TextLink href="/contact">Contact</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.SocialIcon
              alt="LinkedIn"
              src="/linkedin.svg"
              href="https://www.linkedin.com/in/nestorlopezlopez/"
            />
            <Header.SocialIcon
              alt="Github"
              src="/github.svg"
              href="https://github.com/Nsttt/"
            />
            <Header.SocialIcon
              alt="Twitter"
              src="/twitter.svg"
              href="https://twitter.com/nstlopez/"
            />
          </Header.Group>
        </Header.Frame>
      </Header>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the logo", () => {
    const { getByAltText } = render(<Header.Logo />);
    expect(getByAltText("Logo")).toBeTruthy();
  });

  it("renders the title", () => {
    const { getByText } = render(<Header.Title />);
    expect(getByText("Nst")).toBeTruthy();
    expect(getByText("Lopez")).toBeTruthy();
  });

  it("renders and clicks a textlink", async () => {
    const { getByText } = render(
      <Header.TextLink href="/">Test</Header.TextLink>
    );
    expect(getByText("Test")).toBeTruthy();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// npm run test
test("checks if title exists", () => {
  render(<App />);
  const title = screen.getByTestId("title");
  expect(title.textContent).toEqual("Welcome to My GitHub Repo Listing!");
});

test("checks if the page exists", () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeVisible();
});

test("checks if the app-subtitle exists", () => {
  render(<App />);
  const appSubtitle = screen.getByTestId("app-subtitle");
  expect(appSubtitle.textContent).toEqual("✨ A Collection of GitHub Repos ✨");
});

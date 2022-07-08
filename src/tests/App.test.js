import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<>Hello World</>);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import About from '../components/About';

test("renders a <div> with the ID of 'about'", () => {
  render(<About />);
  const about = screen.getByTestId('about');
  expect(about).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  render(<About />);
  const about = screen.getByTestId('about');
  expect(about.children).toHaveLength(3); // Checks if there are exactly 3 children
});

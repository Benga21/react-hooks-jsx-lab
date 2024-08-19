import { render } from '@testing-library/react';
import About from '../components/About';

test("renders a <div> with the ID of 'about'", () => {
  render(<About />);
  const about = document.getElementById('about');
  expect(about).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  render(<About />);
  const about = document.getElementById('about');
  expect(about.children).toHaveLength(3); 
});


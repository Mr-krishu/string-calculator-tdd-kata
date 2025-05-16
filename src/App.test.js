import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('calculates sum from user input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter numbers/i);
  fireEvent.change(input, { target: { value: '1,2' } });
  fireEvent.click(screen.getByText(/Calculate/i));
  expect(screen.getByText(/sum: 3/i)).toBeInTheDocument();
});

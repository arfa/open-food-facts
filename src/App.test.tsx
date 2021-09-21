import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello there title', () => {
  render(<App />);
  const element = screen.getByText(/Hello there/i);
  expect(element).toBeInTheDocument();
});

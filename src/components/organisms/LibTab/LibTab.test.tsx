import React from 'react';
import { render, screen } from '@testing-library/react';
import LibTab from './LibTab';

import '@testing-library/jest-dom';

test('renders LibElement', () => {
  render(<LibTab />);
  const LibElement = screen.getByText('synopsis');
  expect(LibElement).toBeInTheDocument();
});
test('renders LibText', () => {
    render(<LibTab />);
    const LibElement = screen.getByText('Who is it for?');
    expect(LibElement).toBeInTheDocument();
  });
  test('renders LibTypo', () => {
    render(<LibTab />);
    const LibElement = screen.getByText('About the author');
    expect(LibElement).toBeInTheDocument();
  });
  
  
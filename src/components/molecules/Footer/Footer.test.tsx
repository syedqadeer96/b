import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

import '@testing-library/jest-dom';

test('renders Footer', () => {
  render(<Footer />);
  const FooterElement = screen.getByText('Editorial');
  expect(FooterElement).toBeInTheDocument();
});

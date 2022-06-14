import React from 'react';
import { render, screen } from '@testing-library/react';
import BookDetailViewPage from './BookDetailViewPage';

import '@testing-library/jest-dom';

test('renders Book Detail', () => {
  render(<BookDetailViewPage></BookDetailViewPage>);
  const BannerElement = screen.getByText(' Turning Your Business into an Enduring Great Company');
  expect(BannerElement).toBeInTheDocument();
});
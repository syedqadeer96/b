import React from 'react';
import { render, screen } from '@testing-library/react';
import EntrepreneurshipPage from './EntrepreneurshipPage';

import '@testing-library/jest-dom';


test('renders Book Detail', () => {
  render(<EntrepreneurshipPage></EntrepreneurshipPage>);
  
  const BannerElement = screen.getByText(' Add to lib');
  expect(BannerElement).toBeInTheDocument();
});
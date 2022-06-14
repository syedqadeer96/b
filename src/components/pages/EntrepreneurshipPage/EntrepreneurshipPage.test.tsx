import React from 'react';
import { render, screen } from '@testing-library/react';
import EntrepreneurshipPage from './EntrepreneurshipPage';

import '@testing-library/jest-dom';


test('renders Book Detail', () => {
  render(<EntrepreneurshipPage></EntrepreneurshipPage>);
  
  const BannElement = screen.getByText(' Add to lib');
  expect(BannElement).toBeInTheDocument();
});
test('renders Book ', () => {
    render(<EntrepreneurshipPage></EntrepreneurshipPage>);
    
    const BanElement = screen.getByText('     Trending Blinks');
    expect(BanElement).toBeInTheDocument();
  });
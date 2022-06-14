import React from 'react';
import { render, screen } from '@testing-library/react';
import ExploreTabs from './ExploreTabs';


test('renders ExploreTabs 2', () => {
  render(<ExploreTabs />);
  const TabElement = screen.getByLabelText("Explore by category");
  expect(TabElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavTabs from './NavTabs' ;

test('renders Avatar Component', () => {
  render(<NavTabs></NavTabs>);
  const NavElement = screen.getByText('A');
  expect(NavElement).toBeInTheDocument();
});
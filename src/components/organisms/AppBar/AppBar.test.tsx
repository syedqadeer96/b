import React from 'react';
import { render, screen } from '@testing-library/react';
import  MyAppBar from './MyAppBar';

import '@testing-library/jest-dom';

test('renders AppBar', () => {
  render(<MyAppBar/>);
  const AppBarElement = screen.getByText('My Library');
  expect(AppBarElement).toBeInTheDocument();
});

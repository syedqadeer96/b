
  
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarComponent from './Avatar' ;

test('renders Avatar Component', () => {
  render(<AvatarComponent>A</AvatarComponent>);
  const AvatarElement = screen.getByText('A');
  expect(AvatarElement).toBeInTheDocument();
});

  
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarComponent from './MyAvatar' ;

test('renders Avatar Component', () => {
  render(<AvatarComponent></AvatarComponent>);
  const AvatarElement = screen.getByText('A');
  expect(AvatarElement).toBeInTheDocument();
});
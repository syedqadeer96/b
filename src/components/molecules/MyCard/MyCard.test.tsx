import React from 'react';
import { render, screen } from '@testing-library/react';
import MyCard from './MyCard';

import '@testing-library/jest-dom';
test('renders card by title', () => {
    render(<MyCard title='Bring Your Human to Work'></MyCard>);
    const CardElement = screen.getByText('Bring Your Human to Work');
    expect(CardElement).toBeInTheDocument();
  });
  test('renders card by author', () => {
    render(<MyCard author='Steve Glaveski'></MyCard>);
    const CardElement = screen.getByText('Steve Glaveski');
    expect(CardElement).toBeInTheDocument();
  });
  test('renders card by time', () => {
    render(<MyCard time='15-minute read'></MyCard>);
    const CardElement = screen.getByText('15-minute read');
    expect(CardElement).toBeInTheDocument();
  });
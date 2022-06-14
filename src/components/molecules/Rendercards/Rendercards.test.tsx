import React from 'react';
import { render, screen } from '@testing-library/react';
import Rendercards from './Rendercards' ;
import MyCard from '../MyCard/MyCard';

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
  
 

  test('renders card by read', () => {
    render(<MyCard reads='1.9k reads'></MyCard>);
    const CardElement = screen.getByText('1.9k reads');
    expect(CardElement).toBeInTheDocument();
  });

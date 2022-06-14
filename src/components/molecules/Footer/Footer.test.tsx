import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

import '@testing-library/jest-dom';

test('renders Footer', () => {
  render(<Footer />);
  const FooterElement = screen.getByText('Editorial');
  expect(FooterElement).toBeInTheDocument();
});
test('renders Footer1', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('Useful links');
    expect(FooterElement).toBeInTheDocument();
  });
  test('renders Footer2', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('About');
    expect(FooterElement).toBeInTheDocument();
  });
  
  test('renders Footer3', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('Book lists');
    expect(FooterElement).toBeInTheDocument();
  });
  
  test('renders Footer4', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('Pricing');
    expect(FooterElement).toBeInTheDocument();
  });
  
  test('renders Footer5', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('Careers');
    expect(FooterElement).toBeInTheDocument();
  });
  
  test('renders Footer6', () => {
    render(<Footer />);
    const FooterElement = screen.getByText('Blinkist business');
    expect(FooterElement).toBeInTheDocument();
  });
  
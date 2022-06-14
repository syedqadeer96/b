import React from 'react';
import { render, screen } from '@testing-library/react';
import LabTabs from './LabTabs';

import '@testing-library/jest-dom';

test('renders Tab', () => {
  render(<LabTabs />);
  const TabElement = screen.getByText('Currently reading');
  expect(TabElement).toBeInTheDocument();
});

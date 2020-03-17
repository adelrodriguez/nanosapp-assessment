import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders CampaignsTable', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Campaigns');
  expect(linkElement).toBeInTheDocument();
});

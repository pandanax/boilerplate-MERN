import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseLayout from './BaseLayout';

describe('<BaseLayout />', () => {
  test('it should mount', () => {
    render(<BaseLayout />);
    
    const baseLayout = screen.getByTestId('BaseLayout');

    expect(baseLayout).toBeInTheDocument();
  });
});

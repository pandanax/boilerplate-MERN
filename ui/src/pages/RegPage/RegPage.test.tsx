import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegPage from './RegPage';

describe('<RegPage />', () => {
  test('it should mount', () => {
    render(<RegPage />);
    
    const regPage = screen.getByTestId('RegPage');

    expect(regPage).toBeInTheDocument();
  });
});
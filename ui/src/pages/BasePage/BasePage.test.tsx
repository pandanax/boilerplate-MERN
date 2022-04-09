import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasePage from './BasePage';

describe('<BasePage />', () => {
  test('it should mount', () => {
    render(<BasePage />);
    
    const basePage = screen.getByTestId('BasePage');

    expect(basePage).toBeInTheDocument();
  });
});
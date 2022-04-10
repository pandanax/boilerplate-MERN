import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegForm from './RegForm';

describe('<RegForm />', () => {
  test('it should mount', () => {
    render(<RegForm />);
    
    const regForm = screen.getByTestId('RegForm');

    expect(regForm).toBeInTheDocument();
  });
});
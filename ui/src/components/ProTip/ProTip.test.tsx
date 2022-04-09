import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProTip from './ProTip';

describe('<ProTip />', () => {
  test('it should mount', () => {
    render(<ProTip />);
    
    const proTip = screen.getByTestId('ProTip');

    expect(proTip).toBeInTheDocument();
  });
});
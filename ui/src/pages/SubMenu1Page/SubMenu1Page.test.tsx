import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubMenu1Page from './SubMenu1Page';

describe('<SubMenu1Page />', () => {
  test('it should mount', () => {
    render(<SubMenu1Page />);
    
    const subMenu1Page = screen.getByTestId('SubMenu1Page');

    expect(subMenu1Page).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubMenu2Page from './SubMenu2Page';

describe('<SubMenu2Page />', () => {
  test('it should mount', () => {
    render(<SubMenu2Page />);
    
    const subMenu2Page = screen.getByTestId('SubMenu2Page');

    expect(subMenu2Page).toBeInTheDocument();
  });
});
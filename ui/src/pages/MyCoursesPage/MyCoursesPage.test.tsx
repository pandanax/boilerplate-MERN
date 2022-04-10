import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyCoursesPage from './MyCoursesPage';

describe('<MyCoursesPage />', () => {
  test('it should mount', () => {
    render(<MyCoursesPage />);
    
    const myCoursesPage = screen.getByTestId('MyCoursesPage');

    expect(myCoursesPage).toBeInTheDocument();
  });
});
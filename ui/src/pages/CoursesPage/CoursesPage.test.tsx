import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursesPage from './CoursesPage';

describe('<CoursesPage />', () => {
  test('it should mount', () => {
    render(<CoursesPage />);
    
    const coursesPage = screen.getByTestId('CoursesPage');

    expect(coursesPage).toBeInTheDocument();
  });
});
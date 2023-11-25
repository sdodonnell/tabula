import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import NavBar from '../components/Navigation/NavBar';
import Sidebar from '../components/Navigation/Sidebar';
import UserMenu from '../components/Navigation/UserMenu';

export const session = {
  user: {
    name: "Sam O'Donnell",
    email: 'sam.d.odonnell@gmail.com',
    image: 'https://picsum.photos/200/300'
  },
  expires: 'never'
};

describe('NavBar', () => {
  test('Renders app title', async () => {
    const jsx = await NavBar();
    render(jsx);

    expect(screen.getByRole('navigation')).toHaveTextContent('Tabula');
  });

  test('Renders menu links', async () => {
    const jsx = await NavBar();
    render(jsx);

    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(3);
  });
});

describe('Sidebar', () => {
  test('Shows correct links', async () => {
    const jsx = await Sidebar({ currentUser: { id: 1 } });
    render(jsx);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('My Students')).toBeInTheDocument();
    expect(screen.getByText('All Students')).toBeInTheDocument();
    expect(screen.getByText('Faculty & Staff')).toBeInTheDocument();
  });

  // TODO: Add test for a "My Courses link if a user is logged in and has courses"
  // expect(screen.getByText('My Courses')).toBeInTheDocument();
});

describe('UserMenu', () => {
  test('Menu opens when clicked', () => {
    render(<UserMenu />);
    fireEvent.click(
      screen.getByRole('button', { name: 'Open user menu user photo' })
    );
    expect(screen.getByTestId('user-menu-dropdown')).toBeVisible();
  });

  test("Displays current user's data", () => {
    render(<UserMenu />);
    fireEvent.click(
      screen.getByRole('button', { name: 'Open user menu user photo' })
    );
    expect(screen.getByText("Sam O'Donnell")).toBeInTheDocument();
    expect(screen.getByText('sam.d.odonnell@gmail.com')).toBeInTheDocument();
  });
});

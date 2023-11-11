import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import UserMenu from './UserMenu';

const session = {
  user: {
    name: "Sam O'Donnell",
    email: 'sam.d.odonnell@gmail.com',
    image: 'https://picsum.photos/200/300'
  },
  expires: 'never'
};

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => ({
      data: session,
      status: 'authenticated'
    }))
  };
});

jest.mock('next-auth/next', () => ({
  __esModule: true,
  default: jest.fn(),
  getServerSession: jest.fn(
    () =>
      new Promise(resolve => {
        resolve(session);
      })
  )
}));

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
    const jsx = await Sidebar({ currentUser: session.user });
    render(jsx);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('My Students')).toBeInTheDocument();
    expect(screen.getByText('My Courses')).toBeInTheDocument();
    expect(screen.getByText('All Students')).toBeInTheDocument();
    expect(screen.getByText('Faculty & Staff')).toBeInTheDocument();
  });
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

import { render } from '@testing-library/react';
import NewAssignment from 'assignment/add/page';
import EditAssignmentForm from 'assignment/form';
import NewCourse from 'course/add/page';
import NewUser from 'course/add/page';
import EditUserForm from 'user/[id]/edit/form';

describe('Forms', () => {
  describe('User Form', () => {
    test('A new user form renders with blank input', () => {
      render(<NewUser />);
    });

    test('An edit user form renders with prepopulated input', () => {
      render(<EditUserForm />);
    });
  });

  describe('Assignment Form', () => {
    test('A new assignment form renders with blank input', () => {
      render(<NewAssignment />);
    });

    test('An edit assignment form renders with prepopulated input', () => {
        render(<EditAssignmentForm />);
      });
  });

  describe('Course Form', () => {
    test('A new course form renders with blank input', () => {
      render(<NewCourse />);
    });

    test('An edit course form renders with prepopulated input', () => {
        render(<EditCourse />);
      });
  });
});

import {
  AssignmentInputVariables,
  CourseInputVariables,
  UserInputVariables
} from '@/types';
import { render } from '@testing-library/react';
import NewAssignment from 'assignment/add/page';
import EditAssignmentForm from 'assignment/form';
import NewCourse from 'course/add/page';
import NewUser from 'course/add/page';
import EditCourseForm from 'course/form';
import EditUserForm from 'user/form';

const mockUserValues: UserInputVariables = {
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@example.com',
  gender: 'Male',
  role: 'STUDENT'
};

const mockAssignmentValues: AssignmentInputVariables = {
  id: 1,
  name: 'Test assignment',
  dueDate: new Date().toISOString()
};

const mockCourseValues: CourseInputVariables = {
  id: 1,
  name: 'Test course',
  description: 'Test description',
  term: 'Spring 2023'
};

describe('Forms', () => {
  describe('User Form', () => {
    test('A new user form renders with blank input', () => {
      render(<NewUser />);
    });

    test('An edit user form renders with prepopulated input', () => {
      render(<EditUserForm initialValues={mockUserValues} route="/user/1" />);
    });
  });

  describe('Assignment Form', () => {
    test('A new assignment form renders with blank input', () => {
      render(<NewAssignment />);
    });

    test('An edit assignment form renders with prepopulated input', () => {
      render(
        <EditAssignmentForm
          initialValues={mockAssignmentValues}
          route="/assignment/1"
        />
      );
    });
  });

  describe('Course Form', () => {
    test('A new course form renders with blank input', () => {
      render(<NewCourse />);
    });

    test('An edit course form renders with prepopulated input', () => {
      render(
        <EditCourseForm initialValues={mockCourseValues} route="/course/1" />
      );
    });
  });
});

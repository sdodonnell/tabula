import { render, screen, waitFor } from '@testing-library/react';

import NewAssignment from '@/app/assignment/add/page';
import EditAssignmentForm from '@/app/assignment/form';
import NewCourse from '@/app/course/add/page';
import EditCourseForm from '@/app/course/form';
import NewUser from '@/app/user/add/page';
import EditUserForm from '@/app/user/form';
import { formatDateTime } from '@/lib/utils';
import {
  AssignmentInputVariables,
  CourseInputVariables,
  UserInputVariables
} from '@/types';

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
  dueDate: new Date('11/5/2023').toISOString(),
  sectionId: 1
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
      expect(screen.getByLabelText('First Name')).toHaveValue('');
      expect(screen.getByLabelText('Last Name')).toHaveValue('');
      expect(screen.getByLabelText('Select Type')).toHaveValue('STUDENT');
      expect(screen.getByLabelText('Select Pronoun')).toHaveValue('He/Him');
      expect(screen.getByLabelText('Email')).toHaveValue('');
    });

    test('An edit user form renders with prepopulated input', () => {
      render(<EditUserForm initialValues={mockUserValues} route="/user/1" />);
      expect(screen.getByLabelText('First Name')).toHaveValue('John');
      expect(screen.getByLabelText('Last Name')).toHaveValue('Smith');
      expect(screen.getByLabelText('Select Type')).toHaveValue('STUDENT');
      expect(screen.getByLabelText('Select Pronoun')).toHaveValue('He/Him');
      expect(screen.getByLabelText('Email')).toHaveValue(
        'john.smith@example.com'
      );
    });
  });

  describe('Assignment Form', () => {
    test('A new assignment form renders with blank input', async () => {
      const jsx = await NewAssignment();
      render(jsx);

      await waitFor(() => {
        expect(screen.getByLabelText('Name')).toHaveValue('');
      });
      await waitFor(() => {
        expect(screen.getByLabelText('Due Date')).toHaveValue(
          formatDateTime(new Date().toISOString())
        );
      });
    });

    test('An edit assignment form renders with prepopulated input', async () => {
      render(
        <EditAssignmentForm
          activeCourses={[]}
          initialValues={mockAssignmentValues}
          route="/assignment/1"
        />
      );
      await waitFor(() => {
        expect(screen.getByLabelText('Name')).toHaveValue('Test assignment');
      });
      await waitFor(() => {
        expect(screen.getByLabelText('Due Date')).toHaveValue(
          formatDateTime(new Date('11/5/2023').toISOString())
        );
      });
    });
  });

  describe('Course Form', () => {
    test('A new course form renders with blank input', () => {
      render(<NewCourse />);
      expect(screen.getByLabelText('Name')).toHaveValue('');
      expect(screen.getByLabelText('Term')).toHaveValue('');
      expect(screen.getByLabelText('Description')).toHaveValue('');
    });

    test('An edit course form renders with prepopulated input', async () => {
      render(
        <EditCourseForm initialValues={mockCourseValues} route="/course/1" />
      );
      expect(screen.getByLabelText('Name')).toHaveValue('Test course');
      expect(screen.getByLabelText('Term')).toHaveValue('Spring 2023');
      await waitFor(() => {
        expect(screen.getByLabelText('Description')).toHaveValue(
          'Test description'
        );
      });
    });
  });
});

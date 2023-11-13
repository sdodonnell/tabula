# Tabula - A New Learning Management System

Welcome to the GitHub repository of **Tabula**, an innovative Learning Management System (LMS) designed for teachers, students, and administrators. Tabula facilitates efficient classroom management by letting AI do the administrative tasks so teachers can spend more time teaching and students can spend more time learning.

## Features

- **For Teachers**: Manage courses, assignments, and grades.
- **For Students**: Enroll in courses, submit assignments, and monitor progress.
- **For Administrators**: Oversee user accounts, manage courses, and configure system settings.

### Development Priorities

- **Course Management:**
  - Create, edit, and delete courses.
  - Add and remove students from courses.
  - Upload and organize course materials.
- **Assignment Tracking:**
  - Create and distribute assignments.
  - Collect and grade student submissions.
  - Provide feedback to students.
- **Gradebook:**
  - Easily input and manage grades for assignments.
  - Generate comprehensive reports for administrators.
- **User-friendly Interface:**
  - Intuitive dashboard for quick access to essential features.
  - Responsive design for seamless use on various devices.
- **Security:**
  - Secure user authentication and authorization.
  - Data encryption for sensitive information.

## Built With

## Built With
- [Next.JS](https://nextjs.org/) - The React framework for production.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [PostgreSQL](https://www.postgresql.org/) - The world's most advanced open-source relational database.

## Getting Started

### Prerequisites

- Node.js (v18)
- pnpm

### Installation

> **_NOTE:_** These instructions assume you're using `pnpm`, but use your package manager of choice.

1. Clone the repository:
   ```bash
   git clone https://github.com/sdodonnell/Tabula.git
   ```
2. Install packages using pnpm:
   ```bash
   pnpm install
   ```
3. Set up your `.env` file with the required environment variables (actual variable provided by administrator):
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/tabula"
   ```
4. (optional) Add the following line to your `hosts` file:
    ```bash
    127.0.0.1 dev.tabulalms.com:3000
    ```

### Running the Application

To start the development server:

```bash
pnpm run dev:local
```

The application will be accessible at `http://localhost:3000`.


## Running Tests

Tabula uses Jest and React Testing Library for unit testing.

### Prerequisites for Testing

- Jest (v26 or higher)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Running Unit Tests

Execute the tests with:

```bash
pnpm test
```

This command will run all tests and generate a coverage report.

## Contact

Sam O'Donnell - sam.d.odonnell@gmail.com

Project Link: [https://github.com/sdodonnell/Tabula](https://github.com/sdodonnell/Tabula)

import type { NextPage } from 'next';
import styled from 'styled-components';

const NewUserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const NewUser: NextPage = () => {
  return (
    <>
      <h2>New User</h2>
      <NewUserForm method="post" action="http://localhost:4000/addUser">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="type">Type</label>
        <select id="type" name="type">
          <option value="student">Student</option>
          <option value="teacher">Female</option>
          <option value="administrator">Administrator</option>
          <option value="parent">Parent</option>
        </select>
        <input type="submit" />
      </NewUserForm>
    </>
  );
};

export default NewUser;

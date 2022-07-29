import { FormControl, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';

const NewUser: NextPage = () => {
  return (
    <>
      <Typography variant="h2">New User</Typography>
      <FormControl>
        <TextField id="first-name" label="First Name" />
        <TextField id="last-name" label="Last Name" />
        <TextField id="email" label="Email Address" />
      </FormControl>
    </>
  );
};

export default NewUser;

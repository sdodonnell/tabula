import type { GetServerSideProps, NextPage } from 'next';
import Grid from '../components/Grid';
import { User } from '../lib/types';

interface GradebookProps {
    data: User[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/getStudents')
    const data = await res.json();
  
    return { props: { data }}
  }

const Gradebook: NextPage<GradebookProps> = ({ data }) => {
  return (
    <>
      <Grid items={data} />
    </>
  );
};

export default Gradebook;

import { getUsers } from '@/lib/user';

import EditSectionForm from '../form';

interface Props {
  params: {
    id: number;
  };
}

const NewSection = async ({ params }: Props) => {
  const { id } = params;
  const teachers = await getUsers({ role: 'TEACHER' });

  const initialValues = {
    active: true,
    name: ''
  };

  return (
    <EditSectionForm
      courseId={id}
      teachers={teachers}
      route={`/course/${id}/edit`}
      initialValues={initialValues}
    />
  );
};

export default NewSection;

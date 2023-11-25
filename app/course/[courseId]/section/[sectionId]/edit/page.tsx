import { getSection } from '@/lib/course';
import { getUsers } from '@/lib/user';

import EditSectionForm from '../../form';

interface Props {
  params: {
    courseId: string;
    sectionId: string;
  };
}

const EditSection = async ({ params }: Props) => {
  const { sectionId, courseId } = params;
  const teachers = await getUsers({ role: 'TEACHER' });
  const section = await getSection({ id: parseInt(sectionId) });

  const initialValues = {
    active: true,
    name: '',
    courseId: parseInt(courseId),
    ...section
  };

  return (
    <EditSectionForm
      teachers={teachers}
      route={`/course/${courseId}/section/${sectionId}`}
      initialValues={initialValues}
    />
  );
};

export default EditSection;

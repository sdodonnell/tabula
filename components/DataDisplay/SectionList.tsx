import { Section } from '@/types';

import ListActions from './ListActions';

const SectionList = ({ sections }: { sections: Section[] }) => {
  if (!sections.length) return null;

  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {sections.map(section => {
        if (!section.id) return null;

        const teacherName = section.teacher
          ? `${section.teacher.firstName} ${section.teacher.lastName}`
          : '';

        const sectionName = section.name;

        return (
          <li className="pb-3 sm:pb-4" key={section.id}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {section.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {teacherName}
                </p>
              </div>
              <ListActions id={section.id} entityType="section" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SectionList;

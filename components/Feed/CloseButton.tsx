'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

const CloseButton = () => {
  const router = useRouter();

  const goBack = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  return (
    <button
      type="button"
      className="absolute top-1 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
      onClick={goBack}
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  );
};

export default CloseButton;

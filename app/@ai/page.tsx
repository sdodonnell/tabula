'use client';

import { SyntheticEvent, startTransition } from 'react';

import { getFeedback } from '@/lib/ai';

const AI = () => {
  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    console.log('clicked');
    startTransition(() => {
      getFeedback();
    });
  };
  return <button onClick={handleClick}>Get Feedback</button>;
};

export default AI;

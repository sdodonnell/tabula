'use server';

import OpenAI from 'openai';

// prompt fragments
const PROMPTS = {
  ASSIGNMENT:
    'You are a helpful writing feedback assistant helping a student who is writing a rough draft of a response for the following assignment prompt: __assignment__',
  RESPONSE:
    'Provide feedback on the clarity, correctness, and stylistic quality of the following draft: __response__'
};

// Connect to OpenAI client
const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export const getFeedback = async () =>
  //   assignmentData: EditorData,
  //   editorData: EditorData,
  //   classData: Section,
  //   userData: User
  {
    // parse assignment data into usable text
    const assignmentText =
      'Write a paragraph about the causes of the American Civil War.';
    // parse editor data into usable text
    const responseText =
      "Ever since its beginning, the debate over cause of the Civil War has created enormous controversy.  To many people, the cause of this terrible conflict was the issue of slavery, and the failure of the North and South to solve this issue. To others, the war was caused by the North's economic and political aggression towards the South. However, the war itself was caused by the failure of the democratic institution of the United States.";

    const systemPrompt = `${PROMPTS.ASSIGNMENT.replace(
      '__assignment__',
      assignmentText
    )}`;

    const userPrompt = `${PROMPTS.RESPONSE.replace(
      '__response__',
      responseText
    )}
  `;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      model: 'gpt-4'
    });

    console.log(completion.choices[0].message);
  };

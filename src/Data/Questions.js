import { nanoid } from "nanoid";

const Data = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of these programming languages is a low-level language?",
    correct_answer: "Assembly",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does &quot;LCD&quot; stand for?",
    correct_answer: "Liquid Crystal Display",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is known as &quot;the brain&quot; of the Computer?",
    correct_answer: "Central Processing Unit",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
  },

  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Moore&#039;s law originally stated that the number…rs on a microprocessor chip would double every...",
    correct_answer: "Year",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
  },
];

export const QuestData = Data.map((loop) => {
  let id = nanoid();
  return {
    id: id,
    type: loop.type,
    difficulty: loop.difficulty,
    category: loop.category,
    question: loop.question,
    correct_answer: loop.correct_answer,
    answers: [`Option 1`, `Option 2`, `Option 3`, `Option 4`],
  };
});

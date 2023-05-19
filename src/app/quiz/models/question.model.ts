// returned object of the questions per category request
export interface QuestionResponse {
  response_code: number;
  results: Question[];
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers?: string[];
  selected_answer?: string;
}

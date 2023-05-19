// Returned object of the category get request
export interface CategoryResult {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

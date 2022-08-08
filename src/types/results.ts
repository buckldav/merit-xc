export interface Result {
  time: string;
  i: number;
  gg?: string; // grade/gender
  pr?: boolean;
}

export interface ResultsProps {
  // sheet: string;
  results: Result[][];
  apiKey: string;
}

export type Filter = {
  i: number;
  data: string;
};

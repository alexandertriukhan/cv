export const FIELDS_SIZE = 18;

export enum DifficultiesEnum {
  TEST = 'test',
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  EXPERT = 'expert',
}

export type DifficultyType = {
  id: string,
  ROWS: number,
  COLS: number,
  MINES: number,
}

export const DIFFICULTIES: { [key in DifficultiesEnum]: DifficultyType } = {
  [DifficultiesEnum.TEST]: {
    id: 'test',
    ROWS: 3,
    COLS: 3,
    MINES: 1,
  },
  [DifficultiesEnum.BEGINNER]: {
    id: 'beginner',
    COLS: 9,
    ROWS: 9,
    MINES: 10,
  },
  [DifficultiesEnum.INTERMEDIATE]: {
    id: 'intermediate',
    COLS: 16,
    ROWS: 16,
    MINES: 40,
  },
  [DifficultiesEnum.EXPERT]: {
    id: 'expert',
    COLS: 24,
    ROWS: 24,
    MINES: 99,
  },
};

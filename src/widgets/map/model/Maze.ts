export const ROAD = 0;
export const WALL = 1;
export const START = 2;
export const END = 3;

export type CellType = typeof ROAD | typeof WALL | typeof START | typeof END;

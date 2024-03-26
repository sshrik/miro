export enum CellEnum {
	ROAD = "ROAD",
	WALL = "WALL",
	START = "START",
	END = "END",
}

export type CellType = keyof typeof CellEnum;

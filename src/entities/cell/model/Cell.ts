export enum CellEnum {
	ROAD = "ROAD",
	WALL = "WALL",
	WALL_HORIZONTAL_LEFT = "WALL_HORIZONTAL_LEFT",
	WALL_HORIZONTAL_RIGHT = "WALL_HORIZONTAL_RIGHT",
	WALL_LEFT_CORNER = "WALL_LEFT_CORNER",
	WALL_RIGHT_CORNER = "WALL_RIGHT_CORNER",
	WALL_VERTICAL_END_LEFT = "WALL_VERTICAL_END_LEFT",
	WALL_VERTICAL_END_RIGHT = "WALL_VERTICAL_END_RIGHT",
	WALL_VERTICAL_LEFT = "WALL_VERTICAL_LEFT",
	WALL_VERTICAL_RIGHT = "WALL_VERTICAL_RIGHT",
	WALL_ALONE = "WALL_ALONE",
	START = "START",
	END = "END",
}

export type CellType = keyof typeof CellEnum;

export const isWall = (cellType: CellType): boolean => {
	return cellType.includes("WALL");
};

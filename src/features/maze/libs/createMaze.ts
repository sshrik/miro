import { CellEnum, isWall, type CellType } from "@/entities/cell/model";
import { DirectionEnum, type DirectionType } from "@/entities/direction/model";
import type { Position } from "@/entities/position/model";
import { UnacceptableMazeSizeError } from "@/features/maze/model";
import { mazeGenerator } from "@miketmoore/maze-generator";

const createMaze = (width: number, height: number) => {
	if (width <= 0 || height <= 0) {
		throw new UnacceptableMazeSizeError();
	}

	const map = mazeGenerator({ rows: height, columns: width });

	const maze: CellType[][] = Array.from({ length: height * 2 + 1 }, () =>
		Array.from({ length: width * 2 + 1 }, () => CellEnum.ROAD),
	);

	const pickRandomCell = () => {
		let row = Math.floor(Math.random() * height);
		let col = Math.floor(Math.random() * width);

		while (maze[row * 2 + 1][col * 2 + 1] !== CellEnum.ROAD) {
			row = Math.floor(Math.random() * height);
			col = Math.floor(Math.random() * width);
		}

		return { row, col };
	};

	// fill maze`s wall

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			const nowCell = map.getCell({ row, col });

			if (!nowCell) continue;

			const walls = nowCell.getWalls();

			if (walls.east) {
				maze[row * 2 + 1][col * 2 + 2] = CellEnum.WALL;
				if (walls.south) {
					maze[row * 2 + 2][col * 2 + 2] = CellEnum.WALL;
				}
				if (walls.north) {
					maze[row * 2][col * 2 + 2] = CellEnum.WALL;
				}
			}

			if (walls.west) {
				maze[row * 2 + 1][col * 2] = CellEnum.WALL;
				if (walls.south) {
					maze[row * 2 + 2][col * 2] = CellEnum.WALL;
				}
				if (walls.north) {
					maze[row * 2][col * 2] = CellEnum.WALL;
				}
			}

			if (walls.south) {
				maze[row * 2 + 2][col * 2 + 1] = CellEnum.WALL;
				if (walls.east) {
					maze[row * 2 + 2][col * 2 + 2] = CellEnum.WALL;
				}
				if (walls.west) {
					maze[row * 2 + 2][col * 2] = CellEnum.WALL;
				}
			}

			if (walls.north) {
				maze[row * 2][col * 2 + 1] = CellEnum.WALL;
				if (walls.east) {
					maze[row * 2][col * 2 + 2] = CellEnum.WALL;
				}
				if (walls.west) {
					maze[row * 2][col * 2] = CellEnum.WALL;
				}
			}
		}
	}

	// fill maze`s around wall

	for (let row = 0; row < maze.length; row++) {
		maze[row][0] = CellEnum.WALL;
		maze[row][width * 2] = CellEnum.WALL;
	}

	for (let col = 0; col < maze[0].length; col++) {
		maze[0][col] = CellEnum.WALL;
		maze[height * 2][col] = CellEnum.WALL;
	}

	// Specify Wall type

	for (let row = 0; row < maze.length; row++) {
		for (let col = 0; col < maze[0].length; col++) {
			if (isWall(maze[row][col])) {
				maze[row][col] = specifyWall(
					maze,
					{ row, col },
					{ row: maze.length, col: maze[0].length },
				);
			}
		}
	}

	// pick start and end

	let start = pickRandomCell();

	while (maze[start.row * 2 + 1][start.col * 2 + 1] === CellEnum.WALL) {
		start = pickRandomCell();
	}

	maze[start.row * 2 + 1][start.col * 2 + 1] = CellEnum.START;

	const end = pickRandomCell();

	maze[end.row * 2 + 1][end.col * 2 + 1] = CellEnum.END;

	return { maze, start, end };
};

const specifyWall = (maze: CellType[][], position: Position, max: Position) => {
	const { row, col } = position;

	if (row === 0) {
		if (col === 0) {
			return CellEnum.WALL_LEFT_CORNER;
		}

		if (col === max.col - 1) {
			return CellEnum.WALL_RIGHT_CORNER;
		}

		if (isWallDown(maze, position, max)) {
			return CellEnum.WALL_LEFT_CORNER;
		}

		return returnHorizontalWall(position);
	}

	if (row === max.row - 1) {
		return returnHorizontalWall(position);
	}

	if (col === 0) {
		if (isWallRight(maze, position, max)) {
			return CellEnum.WALL_LEFT_CORNER;
		}

		return CellEnum.WALL_VERTICAL_LEFT;
	}

	if (col === max.col - 1) {
		if (isWallLeft(maze, position, max)) {
			return CellEnum.WALL_RIGHT_CORNER;
		}
		return CellEnum.WALL_VERTICAL_RIGHT;
	}

	if (isWallLeft(maze, position, max)) {
		if (isWallRight(maze, position, max)) {
			if (isWallDown(maze, position, max)) {
				if (isWallUp(maze, position, max)) {
					// ← → ↓ ↑
					return CellEnum.WALL_LEFT_CORNER;
				}

				// ← → ↓
				return CellEnum.WALL_RIGHT_CORNER;
			}
			if (isWallUp(maze, position, max)) {
				// ← → ↑
				return returnHorizontalWall(position);
			}
			// ← →
			return returnHorizontalWall(position);
		}
		if (isWallDown(maze, position, max)) {
			if (isWallUp(maze, position, max)) {
				// ← ↓ ↑
				return CellEnum.WALL_RIGHT_CORNER;
			}
			// ← ↓
			if (isUpWallIsRightWallType(maze, position, max)) {
				return CellEnum.WALL_VERTICAL_RIGHT;
			}
			return CellEnum.WALL_RIGHT_CORNER;
		}

		if (isWallUp(maze, position, max)) {
			// ← ↑
			if (isUpWallIsRightWallType(maze, position, max)) {
				return returnHorizontalWall(position);
			}
			return CellEnum.WALL_VERTICAL_END_LEFT;
		}
		// ←
		return returnHorizontalWall(position);
	}
	if (isWallRight(maze, position, max)) {
		if (isWallDown(maze, position, max)) {
			if (isWallUp(maze, position, max)) {
				// → ↓ ↑
				if (isUpWallIsRightWallType(maze, position, max)) {
					return CellEnum.WALL_VERTICAL_RIGHT;
				}
				return CellEnum.WALL_LEFT_CORNER;
			}
			// → ↓
			return CellEnum.WALL_LEFT_CORNER;
		}
		if (isWallUp(maze, position, max)) {
			// → ↑
			if (isUpWallIsRightWallType(maze, position, max)) {
				return CellEnum.WALL_VERTICAL_END_RIGHT;
			}
			return returnHorizontalWall(position);
		}
		// →
		return returnHorizontalWall(position);
	}
	if (isWallDown(maze, position, max)) {
		if (isWallUp(maze, position, max)) {
			if (isUpWallIsRightWallType(maze, position, max)) {
				return CellEnum.WALL_VERTICAL_RIGHT;
			}
			// ↓ ↑
			return CellEnum.WALL_VERTICAL_LEFT;
		}

		// ↓
		return CellEnum.WALL_VERTICAL_LEFT;
	}
	if (isWallUp(maze, position, max)) {
		if (isUpWallIsRightWallType(maze, position, max)) {
			return CellEnum.WALL_VERTICAL_END_RIGHT;
		}
		// ↑
		return CellEnum.WALL_VERTICAL_END_LEFT;
	}

	return CellEnum.WALL_ALONE;
};

const isIn = (direction: DirectionType, position: Position, max: Position) => {
	switch (direction) {
		case DirectionEnum.Up:
			return position.row > 0;
		case DirectionEnum.Down:
			return position.row < max.row - 1;
		case DirectionEnum.Left:
			return position.col > 0;
		case DirectionEnum.Right:
			return position.col < max.col - 1;
	}
};

const isWallDown = (maze: CellType[][], position: Position, max: Position) => {
	if (isIn(DirectionEnum.Down, position, max)) {
		return isWall(maze[position.row + 1][position.col]);
	}
	return false;
};

const isWallRight = (maze: CellType[][], position: Position, max: Position) => {
	if (isIn(DirectionEnum.Right, position, max)) {
		return isWall(maze[position.row][position.col + 1]);
	}
	return false;
};

const isWallUp = (maze: CellType[][], position: Position, max: Position) => {
	if (isIn(DirectionEnum.Up, position, max)) {
		return isWall(maze[position.row - 1][position.col]);
	}
	return false;
};

const isWallLeft = (maze: CellType[][], position: Position, max: Position) => {
	if (isIn(DirectionEnum.Left, position, max)) {
		return isWall(maze[position.row][position.col - 1]);
	}
	return false;
};

const isUpWallIsRightWallType = (
	maze: CellType[][],
	position: Position,
	max: Position,
) => {
	if (isIn(DirectionEnum.Up, position, max)) {
		const row = position.row;
		const col = position.col;
		return (
			maze[row - 1][col] === CellEnum.WALL_RIGHT_CORNER ||
			maze[row - 1][col] === CellEnum.WALL_VERTICAL_RIGHT
		);
	}
};

const returnHorizontalWall = (position: Position) => {
	return position.col % 2 === 0
		? CellEnum.WALL_HORIZONTAL_RIGHT
		: CellEnum.WALL_HORIZONTAL_LEFT;
};

export default createMaze;

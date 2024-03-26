import { CellEnum, type CellType } from "@/entities/cell/model";
import { mazeGenerator } from "@miketmoore/maze-generator";

const createMaze = (width: number, height: number) => {
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

	for (let h = 0; h < height; h++) {
		for (let w = 0; w < width; w++) {
			const nowCell = map.getCell({ row: h, col: w });

			if (!nowCell) continue;

			const walls = nowCell.getWalls();

			if (walls.east) {
				maze[h * 2 + 1][w * 2 + 2] = CellEnum.WALL;
				if (walls.south) {
					maze[h * 2 + 2][w * 2 + 2] = CellEnum.WALL;
				}
				if (walls.north) {
					maze[h * 2][w * 2 + 2] = CellEnum.WALL;
				}
			}

			if (walls.west) {
				maze[h * 2 + 1][w * 2] = CellEnum.WALL;
				if (walls.south) {
					maze[h * 2 + 2][w * 2] = CellEnum.WALL;
				}
				if (walls.north) {
					maze[h * 2][w * 2] = CellEnum.WALL;
				}
			}

			if (walls.south) {
				maze[h * 2 + 2][w * 2 + 1] = CellEnum.WALL;
				if (walls.east) {
					maze[h * 2 + 2][w * 2 + 2] = CellEnum.WALL;
				}
				if (walls.west) {
					maze[h * 2 + 2][w * 2] = CellEnum.WALL;
				}
			}

			if (walls.north) {
				maze[h * 2][w * 2 + 1] = CellEnum.WALL;
				if (walls.east) {
					maze[h * 2][w * 2 + 2] = CellEnum.WALL;
				}
				if (walls.west) {
					maze[h * 2][w * 2] = CellEnum.WALL;
				}
			}
		}
	}

	// fill maze`s around wall

	for (let h = 0; h < height; h++) {
		maze[h * 2][0] = CellEnum.WALL;
		maze[h * 2][width * 2] = CellEnum.WALL;
	}

	for (let w = 0; w < width; w++) {
		maze[0][w * 2] = CellEnum.WALL;
		maze[height * 2][w * 2] = CellEnum.WALL;
	}

	// pick start and end

	const start = pickRandomCell();
	maze[start.row * 2 + 1][start.col * 2 + 1] = CellEnum.START;

	const end = pickRandomCell();

	maze[end.row * 2 + 1][end.col * 2 + 1] = CellEnum.END;

	return { maze, start, end };
};

export default createMaze;

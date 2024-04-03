import type { CellType } from "@/entities/cell/model";
import { createMaze } from "@/features/maze/libs";
import type { Position } from "@/entities/position/model";
import { UnacceptableMazeSizeError } from "@/features/maze/model";

class Maze {
	private _maze: CellType[][];

	private _start: Position;

	private _end: Position;

	constructor(width: number, height: number) {
		if (width <= 0 || height <= 0) {
			throw new UnacceptableMazeSizeError();
		}

		const { maze, start, end } = createMaze(width, height);

		this._maze = maze;
		this._start = start;
		this._end = end;
	}

	get maze() {
		return this._maze;
	}

	getCell(row: number, col: number) {
		return this._maze[row][col];
	}

	setCell(row: number, col: number, cell: CellType) {
		this._maze[row][col] = cell;
	}

	getStart() {
		return this._start;
	}

	getEnd() {
		return this._end;
	}
}

export default Maze;

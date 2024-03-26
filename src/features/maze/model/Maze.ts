import type { CellType } from "@/entities/cell/model";
import { Character } from "@/features/character/model";
import { createMaze } from "@/features/maze/libs";
import type { Position } from "@/entities/position/model";

class Maze {
	private _maze: CellType[][];

	private _character: Character;

	private _start: Position;

	private _end: Position;

	constructor(width: number, height: number) {
		const { maze, start, end } = createMaze(width, height);

		this._maze = maze;
		this._start = start;
		this._end = end;
		this._character = new Character(start);
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

	get character() {
		return this._character;
	}
}

export default Maze;

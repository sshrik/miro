import { type CellType, CellEnum } from "@/entities/cell/model";
import type { Position } from "@/entities/position/model";

const LIGHT_UP_DISTANCE = 5;

class MiniMap {
	private _map: CellType[][];

	constructor(width: number, height: number) {
		this._map = Array.from({ length: height * 2 + 1 }, () =>
			Array.from({ length: width * 2 + 1 }, () => CellEnum.UNKNOWN),
		);
	}

	get map() {
		return this._map;
	}

	lightUpCell = (map: CellType[][], row: number, col: number) => {
		const width = map[0].length;

		const height = map.length;

		const isInMap = (i: number, j: number) => {
			return i >= 0 && j >= 0 && i < height && j < width;
		};

		for (let i = row - LIGHT_UP_DISTANCE; i <= row + LIGHT_UP_DISTANCE; i++) {
			for (let j = col - LIGHT_UP_DISTANCE; j <= col + LIGHT_UP_DISTANCE; j++) {
				console.log(width, height, i, j);
				if (isInMap(i, j)) {
					console.log(map[i][j]);
					console.log(this._map[i][j]);
					this._map[i][j] = map[i][j];
				}
			}
		}
	};

	getCenteredMap = (now: Position) => {
		const { row, col } = now;

		const width = this._map[0].length;

		const height = this._map.length;

		const centeredMap = Array.from(
			{ length: LIGHT_UP_DISTANCE * 2 + 1 },
			(_, i) =>
				Array.from({ length: LIGHT_UP_DISTANCE * 2 + 1 }, (_, j) => {
					const x = col - LIGHT_UP_DISTANCE + j;
					const y = row - LIGHT_UP_DISTANCE + i;

					if (x < 0 || x >= width || y < 0 || y >= height) {
						return CellEnum.UNKNOWN;
					}

					return this._map[y][x];
				}),
		);

		centeredMap[LIGHT_UP_DISTANCE][LIGHT_UP_DISTANCE] = CellEnum.CHARACTER;

		return centeredMap;
	};
}

export default MiniMap;

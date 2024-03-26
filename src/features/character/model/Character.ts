import { Direction, type DirectionType } from "@/entities/direction/model";
import type { Position } from "@/entities/position/model";

class Character {
	private _position: Position;
	private _direction: DirectionType;

	constructor(position: Position) {
		this._position = position;
		this._direction = (["Up", "Down", "Left", "Right"] as const)[
			Math.floor(Math.random() * 4)
		];
	}

	get position() {
		return this._position;
	}

	get direction() {
		return this._direction;
	}

	move(direction: DirectionType) {
		this._direction = direction;

		switch (direction) {
			case Direction.Up:
				this._position.row--;
				break;
			case Direction.Down:
				this._position.row++;
				break;
			case Direction.Left:
				this._position.col--;
				break;
			case Direction.Right:
				this._position.col++;
				break;
		}
	}

	turn(direction: DirectionType) {
		this._direction = direction;
	}
}

export default Character;

export enum Direction {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

export type DirectionType = keyof typeof Direction;

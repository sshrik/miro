export enum DirectionEnum {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

export type DirectionType = keyof typeof DirectionEnum;

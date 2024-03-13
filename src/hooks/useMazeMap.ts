import { ROAD } from "@/constants/Game";

export const useMazeMap = (width: number, height: number) => {
	const map = Array.from({ length: height }, () =>
		Array.from({ length: width }, () => ROAD),
	);

	// TODO: Implement the maze generation algorithm

	return map;
};

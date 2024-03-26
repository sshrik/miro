import { CellEnum } from "@/entities/cell/model";
import { createMaze } from "@/features/maze/libs";

describe("createMaze", () => {
	const WIDTH = 5;
	const HEIGHT = 5;

	const { maze, start, end } = createMaze(WIDTH, HEIGHT);

	it("should create a maze", () => {
		expect(maze).toBeDefined();
	});

	it("should create a maze with the correct size", () => {
		expect(maze.length).toBe(HEIGHT * 2 + 1);
		expect(maze[0].length).toBe(WIDTH * 2 + 1);
	});

	it("should create a maze with the correct start and end", () => {
		expect(maze[start.row * 2 + 1][start.col * 2 + 1]).toBe(CellEnum.START);
		expect(maze[end.row * 2 + 1][end.col * 2 + 1]).toBe(CellEnum.END);
	});
});

import { useCreateMaze } from "@/widgets/map/libs";
import { END, START } from "@/widgets/map/model";
import { renderHook } from "@testing-library/react";

describe("useCreateMze", () => {
	const WIDTH = 5;
	const HEIGHT = 5;

	it("should create a maze", () => {
		const { result } = renderHook(() => useCreateMaze());

		const maze = result.current(WIDTH, HEIGHT);

		expect(maze).toBeDefined();
	});

	it("should create a maze with the correct size", () => {
		const { result } = renderHook(() => useCreateMaze());

		const maze = result.current(WIDTH, HEIGHT);

		expect(maze.length).toBe(HEIGHT * 2 + 1);
		expect(maze[0].length).toBe(WIDTH * 2 + 1);
	});

	it("should create a maze with the correct start and end", () => {
		const { result } = renderHook(() => useCreateMaze());

		const maze = result.current(WIDTH, HEIGHT);

		let start = false;
		let end = false;

		for (let h = 0; h < HEIGHT * 2 + 1; h++) {
			for (let w = 0; w < WIDTH * 2 + 1; w++) {
				if (maze[h][w] === START) {
					start = true;
				} else if (maze[h][w] === END) {
					end = true;
				}
			}
		}

		expect(start).toBe(true);
	});
});

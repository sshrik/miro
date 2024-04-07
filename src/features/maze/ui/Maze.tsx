import { Cell } from "@/entities/cell/ui";
import type { Maze as MazeClass } from "@/features/maze/model";
import { memo } from "react";

type MazeProps = {
	maze: MazeClass;
};

const Maze: React.FC<MazeProps> = memo((props) => {
	const { maze } = props;

	return (
		<div className="flex flex-col">
			{maze.maze.map((row, rowIndex) => (
				<div key={rowIndex} className="flex">
					{row.map((cell, cellIndex) => (
						<Cell key={cellIndex} type={cell} />
					))}
				</div>
			))}
		</div>
	);
});

export default Maze;

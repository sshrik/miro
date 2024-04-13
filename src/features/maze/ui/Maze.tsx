import { Cell } from "@/entities/cell/ui";
import type { Maze as MazeClass } from "@/features/maze/model";
import { useMemo } from "react";

type MazeProps = {
	maze: MazeClass;
	style?: React.CSSProperties;
};

const Maze: React.FC<MazeProps> = (props) => {
	const { maze, style } = props;

	const mazeComponent = useMemo(() => {
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
	}, [maze]);

	return (
		<div className="absolute duration-500" style={style}>
			{mazeComponent}
		</div>
	);
};

export default Maze;

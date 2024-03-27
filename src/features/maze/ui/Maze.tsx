"use client";

import { Cell } from "@/entities/cell/ui";
import { Maze as MazeClass } from "@/features/maze/model";
import { useEffect, useState } from "react";

type MazeProps = {
	width: number;
	height: number;
};

const Maze: React.FC<MazeProps> = (props) => {
	const { width, height } = props;

	const [maze, setMaze] = useState<MazeClass | null>(null);

	useEffect(() => {
		setMaze(new MazeClass(width, height));
	}, [width, height]);

	if (maze) {
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
	}

	return <div />;
};

export default Maze;

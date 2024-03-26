"use client";

import { useCreateMaze } from "@/widgets/map/libs";
import type { CellType } from "@/widgets/map/model";
import { Cell } from "@/widgets/map/ui";
import { useEffect, useState } from "react";

export default function Home() {
	const createMaze = useCreateMaze();

	const [maze, setMaze] = useState<CellType[][]>([]);

	useEffect(() => {
		setMaze(createMaze(10, 10));
	}, [createMaze]);

	return (
		<div className="flex flex-col gap-2">
			{maze.map((row, rowIndex) => (
				<div key={rowIndex} className="flex gap-2">
					{row.map((cell, cellIndex) => (
						<Cell key={cellIndex} type={cell} />
					))}
				</div>
			))}
		</div>
	);
}

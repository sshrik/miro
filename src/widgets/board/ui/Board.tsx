"use client";

import { CellSize } from "@/entities/cell/constants";
import { CellEnum, isWall } from "@/entities/cell/model";
import { DirectionEnum, type DirectionType } from "@/entities/direction/model";
import { Position } from "@/entities/position/model";
import {
	type CharacterStateType,
	CharacterStateEnum,
	createCharacterState,
	isIdleState,
} from "@/features/character/model";
import { Character } from "@/features/character/ui";
import { Controller } from "@/features/controller/ui";
import { Maze as MazeClass } from "@/features/maze/model";
import { Maze } from "@/features/maze/ui";
import useCharacterPosition from "@/widgets/board/lib/useCharacterPosition";
import { useEffect, useMemo, useState } from "react";

type BoardProps = {
	width: number;
	height: number;
};

const Board: React.FC<BoardProps> = (props) => {
	const { width, height } = props;

	const [maze, setMaze] = useState<MazeClass | null>(null);

	const { moveLeft, moveRight, moveDown, moveUp, setPosition, ...position } =
		useCharacterPosition();

	const [direction, setDirection] = useState<DirectionType>(DirectionEnum.Down);

	const [characterState, setCharacterState] = useState<CharacterStateType>(
		createCharacterState(CharacterStateEnum.IDLE),
	);

	const canMove = (direction: DirectionType) => {
		if (!maze) return false;

		const { row, col } = position;

		const maxHeight = maze.maze.length;
		const maxWidth = maze.maze[0].length;

		switch (direction) {
			case DirectionEnum.Up:
				if (row === 0) return false;
				if (isWall(maze.maze[row - 1][col])) return false;
				break;
			case DirectionEnum.Down:
				if (row === maxHeight - 1) return false;
				if (isWall(maze.maze[row + 1][col])) return false;
				break;
			case DirectionEnum.Left:
				if (col === 0) return false;
				if (isWall(maze.maze[row][col - 1])) return false;
				break;
			case DirectionEnum.Right:
				if (col === maxWidth - 1) return false;
				if (isWall(maze.maze[row][col + 1])) return false;
				break;
		}

		return true;
	};

	const handleMoveLeft = () => {
		setDirection(DirectionEnum.Left);
		if (canMove(DirectionEnum.Left)) {
			setCharacterState(createCharacterState(CharacterStateEnum.WALK));
			moveLeft();
		} else setCharacterState(createCharacterState(CharacterStateEnum.BLOCKED));
	};

	const handleMoveRight = () => {
		setDirection(DirectionEnum.Right);
		if (canMove(DirectionEnum.Right)) {
			setCharacterState(createCharacterState(CharacterStateEnum.WALK));
			moveRight();
		} else setCharacterState(createCharacterState(CharacterStateEnum.BLOCKED));
	};

	const handleMoveUp = () => {
		setDirection(DirectionEnum.Up);
		if (canMove(DirectionEnum.Up)) {
			setCharacterState(createCharacterState(CharacterStateEnum.WALK));
			moveUp();
		} else setCharacterState(createCharacterState(CharacterStateEnum.BLOCKED));
	};

	const handleMoveDown = () => {
		setDirection(DirectionEnum.Down);
		if (canMove(DirectionEnum.Down)) {
			setCharacterState(createCharacterState(CharacterStateEnum.WALK));
			moveDown();
		} else setCharacterState(createCharacterState(CharacterStateEnum.BLOCKED));
	};

	const handleAnimationEnd = () => {
		if (!isIdleState(characterState)) {
			setCharacterState(createCharacterState(CharacterStateEnum.IDLE));
		}
	};

	useEffect(() => {
		const maze = new MazeClass(width, height);
		setMaze(maze);

		const start = maze.getStart();
		setPosition(start.row, start.col);
	}, [setPosition, width, height]);

	const [maxPosition, setMaxPosition] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (window) {
			setMaxPosition({
				width: window.innerWidth,
				height: window.innerHeight,
			});

			window.addEventListener("resize", () => {
				setMaxPosition({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			});
		}
	}, []);

	const characterCenter = {
		row: position.row * CellSize + CellSize / 2,
		col: position.col * CellSize + CellSize / 2,
	};

	const maw = maxPosition.width / 2;
	const mah = maxPosition.height / 2;

	const cameraTop = characterCenter.row > mah ? mah - characterCenter.row : 0;

	const cameraLeft = characterCenter.col > maw ? maw - characterCenter.col : 0;

	if (maze) {
		return (
			<div
				className="absolute transition-all duration-500"
				style={{ top: cameraTop, left: cameraLeft }}
			>
				<Maze maze={maze} />
				<Controller
					onMoveLeft={handleMoveLeft}
					onMoveRight={handleMoveRight}
					onMoveUp={handleMoveUp}
					onMoveDown={handleMoveDown}
				/>
				<Character
					position={position}
					direction={direction}
					state={characterState}
					onAnimationEnd={handleAnimationEnd}
				/>
			</div>
		);
	}

	return null;
};

export default Board;

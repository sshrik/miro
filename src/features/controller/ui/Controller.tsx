"use client";

import { useEffect } from "react";

type ControllerProps = {
	onMoveLeft: () => void;
	onMoveRight: () => void;
	onMoveUp: () => void;
	onMoveDown: () => void;
};

const Controller: React.FC<ControllerProps> = (props) => {
	const { onMoveLeft, onMoveRight, onMoveUp, onMoveDown } = props;

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowLeft":
					onMoveLeft();
					break;
				case "ArrowRight":
					onMoveRight();
					break;
				case "ArrowUp":
					onMoveUp();
					break;
				case "ArrowDown":
					onMoveDown();
					break;
			}
		};

		if (window) window.addEventListener("keydown", handleKeyDown);

		return () => {
			if (window) window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onMoveLeft, onMoveRight, onMoveUp, onMoveDown]);

	return (
		<div className="relative w-screen h-screen bg-transparent" style={{zIndex: 9999}}>
			<div className="absolute top-0 left-0 w-full h-20 bg-transparent" onClick={onMoveUp} />
			<div
				className="absolute bottom-0 left-0 w-full h-20 bg-transparent"
				onClick={onMoveDown}
			/>
			<div
				className="absolute top-0 left-0 w-20 h-full bg-transparent"
				onClick={onMoveLeft}
			/>
			<div
				className="absolute top-0 right-0 w-20 h-full bg-transparent"
				onClick={onMoveRight}
			/>
		</div>
	);
};

export default Controller;

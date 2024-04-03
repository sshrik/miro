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

	return <div className="hidden" />;
};

export default Controller;

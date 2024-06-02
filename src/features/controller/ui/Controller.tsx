"use client";

import Image from "next/image";
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
		<div className="absolute right-4 bottom-20 flex flex-col gap-2 w-fit h-fit z-50">
			<div className="flex flex-row justify-center">
				<button onClick={onMoveUp}>
					<Image
						src="/assets/controller/button-up.png"
						width={60}
						height={65}
						alt="button-up-image"
					/>
				</button>
			</div>
			<div className="flex flex-row gap-[68px]">
				<button onClick={onMoveLeft}>
					<Image
						src="/assets/controller/button-left.png"
						width={65}
						height={60}
						alt="button-left-image"
					/>
				</button>
				<button onClick={onMoveRight}>
					<Image
						src="/assets/controller/button-right.png"
						width={65}
						height={60}
						alt="button-right-image"
					/>
				</button>
			</div>
			<div className="flex flex-row justify-center">
				<button onClick={onMoveDown}>
					<Image
						src="/assets/controller/button-down.png"
						width={60}
						height={65}
						alt="button-bottom-image"
					/>
				</button>
			</div>
		</div>
	);
};

export default Controller;

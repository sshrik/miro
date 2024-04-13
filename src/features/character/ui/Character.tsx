import { CellSize } from "@/entities/cell/constants";
import { type DirectionType, DirectionEnum } from "@/entities/direction/model";
import type { Position } from "@/entities/position/model";
import {
	isBlockedState,
	isWalkState,
	type CharacterStateType,
} from "@/features/character/model";
import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

type CharacterProps = {
	position: Position;
	direction: DirectionType;
	state: CharacterStateType;
	onAnimationEnd: () => void;
	cameraPosition: Position;
};

const Character: React.FC<CharacterProps> = (props) => {
	const { position, direction, state, onAnimationEnd, cameraPosition } = props;

	const stateAnimation = useMemo(() => {
		if (isWalkState(state)) return "animate-character-walk";
		if (isBlockedState(state)) {
			switch (direction) {
				case DirectionEnum.Up: {
					return "animate-character-blocked-up";
				}
				case DirectionEnum.Down: {
					return "animate-character-blocked-down";
				}
				case DirectionEnum.Left: {
					return "animate-character-blocked-left";
				}
				case DirectionEnum.Right: {
					return "animate-character-blocked-right";
				}
			}
		}

		return "";
	}, [state, direction]);

	const imageSrc = useMemo(() => {
		switch (direction) {
			case DirectionEnum.Up:
				return "/assets/character/character-back.png";
			case DirectionEnum.Down:
				return "/assets/character/character-front.png";
			case DirectionEnum.Left:
				return "/assets/character/character-left.png";
			case DirectionEnum.Right:
				return "/assets/character/character-right.png";
			default:
				return "/assets/character/character-front.png";
		}
	}, [direction]);

	return (
		<Image
			src={imageSrc}
			alt="Character"
			width={CellSize}
			height={CellSize}
			className={clsx("absolute transition-all duration-500", stateAnimation)}
			style={{
				top: position.row * CellSize + cameraPosition.row,
				left: position.col * CellSize + cameraPosition.col,
			}}
			onAnimationEnd={onAnimationEnd}
		/>
	);
};

export default Character;

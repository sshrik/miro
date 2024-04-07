import Image from "next/image";
import { CellEnum, type CellType } from "@/entities/cell/model";
import { CellSize } from "@/entities/cell/constants";
import { useMemo } from "react";

const walls = [
	"/assets/wall/wall-alone-1.png",
	"/assets/wall/wall-alone-2.png",
];

type WallProps = {
	cellType: CellType;
};

const Wall: React.FC<WallProps> = (props) => {
	const { cellType } = props;

	const assetSrc = useMemo(() => {
		switch (cellType) {
			case CellEnum.WALL_HORIZONTAL_LEFT:
				return "/assets/wall/wall-horizontal-left.png";
			case CellEnum.WALL_HORIZONTAL_RIGHT:
				return "/assets/wall/wall-horizontal-right.png";
			case CellEnum.WALL_LEFT_CORNER:
				return "/assets/wall/wall-left-corner.png";
			case CellEnum.WALL_RIGHT_CORNER:
				return "/assets/wall/wall-right-corner.png";
			case CellEnum.WALL_VERTICAL_END_LEFT:
				return "/assets/wall/wall-vertical-end-left.png";
			case CellEnum.WALL_VERTICAL_END_RIGHT:
				return "/assets/wall/wall-vertical-end-right.png";
			case CellEnum.WALL_VERTICAL_LEFT:
				return "/assets/wall/wall-vertical-left.png";
			case CellEnum.WALL_VERTICAL_RIGHT:
				return "/assets/wall/wall-vertical-right.png";
			case CellEnum.WALL_ALONE:
				return walls[Math.floor(Math.random() * walls.length)];
			default:
				return "/assets/wall/wall-horizontal-left.png";
		}
	}, [cellType]);

	return (
		<div className="relative" style={{ width: CellSize, height: CellSize }}>
			<Image
				src={assetSrc}
				width={CellSize}
				height={CellSize}
				alt="Wall background"
				className="absolute top-0 left-0"
			/>
			<Image
				src="/assets/road/road-1.png"
				width={CellSize}
				height={CellSize}
				alt="Road background"
			/>
		</div>
	);
};

export default Wall;

import { useMemo } from "react";
import Image from "next/image";
import { CellSize } from "@/entities/cell/constants";

const WallBackgroundImage1 = "/assets/wall/wall-1.png";
const WallBackgroundImage2 = "/assets/wall/wall-2.png";

const Wall: React.FC = () => {
	const wallIndex = useMemo(() => {
		return Math.floor(Math.random() * 2);
	}, []);

	return (
		<div className="relative" style={{ width: CellSize, height: CellSize }}>
			<Image
				src="/assets/road/bg.png"
				width={CellSize}
				height={CellSize}
				alt="Road background"
				className="absolute top-0 left-0"
			/>
			{wallIndex === 0 ? (
				<Image
					src={WallBackgroundImage1}
					width={CellSize}
					height={CellSize}
					alt="Wall background"
					className="absolute top-0 left-0"
				/>
			) : (
				<Image
					src={WallBackgroundImage2}
					width={CellSize}
					height={CellSize}
					alt="Wall background"
					className="absolute top-0 left-0"
				/>
			)}
		</div>
	);
};

export default Wall;

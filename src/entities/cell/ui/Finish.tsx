import { useMemo } from "react";
import Image from "next/image";
import { CellSize } from "@/entities/cell/constants";

const BackgroundImage1 = "/assets/road/road-1.png";
const BackgroundImage2 = "/assets/road/road-2.png";
const BackgroundImages = [BackgroundImage1, BackgroundImage2];

const Finish: React.FC = () => {
	const backgroundImage = useMemo(() => {
		return BackgroundImages[
			Math.floor(Math.random() * BackgroundImages.length)
		];
	}, []);

	return (
		<div className="relative" style={{ width: CellSize, height: CellSize }}>
			<Image
				src={backgroundImage}
				width={CellSize}
				height={CellSize}
				className="absolute top-0 left-0"
				alt="Road background"
			/>
			<Image
				src="/assets/road/finish.png"
				width={CellSize}
				height={CellSize}
				className="absolute top-0 left-0"
				alt="finish background"
			/>
		</div>
	);
};

export default Finish;

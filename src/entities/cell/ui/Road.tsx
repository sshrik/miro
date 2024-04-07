import { useMemo } from "react";
import Image from "next/image";
import { CellSize } from "@/entities/cell/constants";

const BackgroundImage1 = "/assets/road/road-1.png";
const BackgroundImage2 = "/assets/road/road-2.png";
const BackgroundImages = [BackgroundImage1, BackgroundImage2];

const Road: React.FC = () => {
	const backgroundImage = useMemo(() => {
		return BackgroundImages[
			Math.floor(Math.random() * BackgroundImages.length)
		];
	}, []);

	return (
		<Image
			src={backgroundImage}
			width={CellSize}
			height={CellSize}
			alt="Road background"
		/>
	);
};

export default Road;

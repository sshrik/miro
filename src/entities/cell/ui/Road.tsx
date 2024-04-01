import { useMemo } from "react";
import Image from "next/image";
import { CellSize } from "@/entities/cell/constants";

const FlowerBackgroundImage1 = "/assets/road/flower-1.png";
const FlowerBackgroundImage2 = "/assets/road/flower-2.png";
const FlowerBackgroundImage3 = "/assets/road/flower-3.png";
const GrassBackgroundImage1 = "/assets/road/grass-1.png";
const GrassBackgroundImage2 = "/assets/road/grass-2.png";
const GrassBackgroundImage3 = "/assets/road/grass-3.png";
const GrassBackgroundImage4 = "/assets/road/grass-4.png";

const flowerBackgroundImages = [
	FlowerBackgroundImage1,
	FlowerBackgroundImage2,
	FlowerBackgroundImage3,
];

const grassBackgroundImages = [
	GrassBackgroundImage1,
	GrassBackgroundImage2,
	GrassBackgroundImage3,
	GrassBackgroundImage4,
];

const Road: React.FC = () => {
	const flowerImageIndexes = useMemo(() => {
		const maxLength = Math.floor(Math.random() * flowerBackgroundImages.length);

		const indexes = [];

		for (let i = 0; i < maxLength; i++) {
			indexes.push(Math.floor(Math.random() * flowerBackgroundImages.length));
		}

		return indexes;
	}, []);

	const grassImageIndexes = useMemo(() => {
		const maxLength = Math.floor(Math.random() * grassBackgroundImages.length);

		const indexes = [];

		for (let i = 0; i < maxLength; i++) {
			indexes.push(Math.floor(Math.random() * grassBackgroundImages.length));
		}

		return indexes;
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

			{flowerImageIndexes.map((_, index) => (
				<Image
					key={`flower-${index}`}
					src={flowerBackgroundImages[index]}
					width={CellSize}
					height={CellSize}
					alt="Road Flower decorated background"
					className="absolute top-0 left-0"
				/>
			))}
			{grassImageIndexes.map((_, index) => (
				<Image
					key={`grass-${index}`}
					src={grassBackgroundImages[index]}
					width={CellSize}
					height={CellSize}
					alt="Road Grass decorated background"
					className="absolute top-0 left-0"
				/>
			))}
		</div>
	);
};

export default Road;

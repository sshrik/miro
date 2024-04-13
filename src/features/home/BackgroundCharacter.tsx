import Image from "next/image";
import type { CSSProperties } from "react";

type BackgroundCharacterProps = {
	style?: CSSProperties;
	rotate: number;
};

const BackgroundCharacter: React.FC<BackgroundCharacterProps> = (props) => {
	const { style, rotate } = props;

	return (
		<Image
			src="/assets/character/character-front.png"
			alt="Character"
			width={100}
			height={100}
			className="absolute"
			style={{ ...style, transform: `rotate(${rotate}deg)` }}
		/>
	);
};

export default BackgroundCharacter;

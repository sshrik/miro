import { BackgroundCharacter } from "@/features/home";
import { RuleModal } from "@/features/rule/ui";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

type StartGameProps = {
	onGameStart: () => void;
};

type CharacterState = {
	top: number;
	left: number;
	rotate: number;
};

const StartPage: React.FC<StartGameProps> = (props) => {
	const { onGameStart } = props;

	const [opened, setOpened] = useState(false);

	const handleOpen = () => {
		setOpened(true);
	};

	const handleClose = () => {
		setOpened(false);
	};

	const [bgCharacter, setBgCharacter] = useState<CharacterState[]>([]);

	const addCharacter = () => {
		const MAX_CHARACTER = 100;

		const top = Math.ceil(Math.random() * 100);
		const left = Math.ceil(Math.random() * 100);
		const rotate = Math.random() * 360;

		if (bgCharacter.length > MAX_CHARACTER) {
			setBgCharacter((prev) => {
				const [_old, ...rest] = prev;

				return [...rest, { top, left, rotate }];
			});
		} else {
			setBgCharacter((prev) => [...prev, { top, left, rotate }]);
		}
	};

	const renderCharacter = bgCharacter.map((character, index) => {
		return (
			<BackgroundCharacter
				key={index}
				style={{
					top: `${character.top}%`,
					left: `${character.left}%`,
				}}
				rotate={character.rotate}
			/>
		);
	});

	useEffect(() => {
		const interval = setInterval(() => {
			addCharacter();
		}, 200);

		return () => {
			clearInterval(interval);
		};
	}, [addCharacter]);

	return (
		<div className="flex justify-center items-center relative w-screen h-screen overflow-hidden">
			<div>{renderCharacter}</div>
			<div className="flex flex-col gap-8 relative p-8 bg-white drop-shadow-md">
				<h1 className="text-xl font-bold">팽귄 대모험</h1>
				<div className="flex flex-row gap-4 w-full">
					<Button onClick={onGameStart}>게임 시작</Button>
					<Button onClick={handleOpen}>게임 방법</Button>
					<Button disabled>리더보드</Button>
				</div>
				<div className="flex flex-row gap-1 w-full items-center">
					<p className="text-sm text-gray-500">Made by</p>
					<a
						className="text-sm text-blue-500 "
						href="https://github.com/sshrik"
					>
						@sshrik
					</a>
				</div>
			</div>
			<RuleModal opened={opened} onClose={handleClose} />
		</div>
	);
};

export default StartPage;

import { Button } from "@/shared/ui/button";
import Modal, { type ModalProps } from "@/shared/ui/modal";
import Image from "next/image";

type RuleModalProps = Omit<ModalProps, "children">;

const RuleModal: React.FC<RuleModalProps> = (props) => {
	const { opened, onClose } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<Modal
			opened={opened}
			onClose={handleClose}
			styles={{
				container: {
					width: "450px",
				},
			}}
		>
			<div className="flex flex-col gap-1">
				<h1 className="text-lg mb-4 font-bold">게임 방법</h1>
				<div className="flex flex-row gap-2 items-end">
					<p className="pb-1">당신은 </p>
					<Image
						src="/assets/character/character-front.png"
						alt="character"
						width={50}
						height={50}
						className="repeat-infinite duration-1000 animate-character-walk"
					/>
					<p className="pb-1">입니다.</p>
				</div>
				<div className="flex flex-row gap-2 items-end">
					<p className="pb-2">키보드 방향키로 움직여</p>
					<div className="relative" style={{ width: 50, height: 50 }}>
						<Image
							className="absolute top-0 left-0"
							src="/assets/road/road-2.png"
							alt="road"
							width={50}
							height={50}
						/>
						<Image
							className="absolute"
							src="/assets/road/finish.png"
							alt="finish"
							width={50}
							height={50}
						/>
					</div>
					<p className="pb-2">를 찾으세요.</p>
				</div>
				<div className="flex gap-2 flex-row-reverse">
					<Button onClick={handleClose}>닫기</Button>
				</div>
			</div>
		</Modal>
	);
};

export default RuleModal;

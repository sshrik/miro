import { Board } from "@/widgets/board/ui";

type GamePageProps = {
	width: number;
	height: number;
	onGameStart: () => void;
	onGameEnd: () => void;
};

const GamePage: React.FC<GamePageProps> = (props) => {
	return <Board {...props} />;
};

export default GamePage;

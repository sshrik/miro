import { Maze } from "@/features/maze/ui";

type BoardProps = {
	width: number;
	height: number;
};

const Board: React.FC<BoardProps> = (props) => {
	const { width, height } = props;

	return (
		<div className="absolute">
			<Maze width={width} height={height} />
		</div>
	);
};

export default Board;

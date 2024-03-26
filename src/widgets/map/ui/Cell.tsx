import { type CellType, END, ROAD, START, WALL } from "@/widgets/map/model";

type CellProps = {
	type: CellType;
};

const Cell: React.FC<CellProps> = (props) => {
	const { type } = props;

	switch (type) {
		case ROAD:
			return <div className="w-8 h-8 bg-white" />;
		case WALL:
			return <div className="w-8 h-8 bg-gray-500" />;
		case START:
			return <div className="w-8 h-8 bg-blue-500" />;
		case END:
			return <div className="w-8 h-8 bg-red-500" />;
		default:
			return null;
	}
};

export default Cell;

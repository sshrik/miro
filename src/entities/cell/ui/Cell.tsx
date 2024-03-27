import { CellEnum, type CellType } from "@/entities/cell/model";
import Road from "./Road";
import Wall from "./Wall";

type CellProps = {
	type: CellType;
};

const Cell: React.FC<CellProps> = (props) => {
	const { type } = props;

	switch (type) {
		case CellEnum.ROAD:
			return <Road />;
		case CellEnum.WALL:
			return <Wall />;
		case CellEnum.START:
			return <div className="w-8 h-8 bg-blue-500" />;
		case CellEnum.END:
			return <div className="w-8 h-8 bg-red-500" />;
		default:
			return null;
	}
};

export default Cell;

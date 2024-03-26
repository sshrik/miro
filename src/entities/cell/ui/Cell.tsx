import { CellEnum, type CellType } from "@/entities/cell/model";

type CellProps = {
	type: CellType;
};

const Cell: React.FC<CellProps> = (props) => {
	const { type } = props;

	switch (type) {
		case CellEnum.ROAD:
			return <div className="w-8 h-8 bg-white" />;
		case CellEnum.WALL:
			return <div className="w-8 h-8 bg-gray-500" />;
		case CellEnum.START:
			return <div className="w-8 h-8 bg-blue-500" />;
		case CellEnum.END:
			return <div className="w-8 h-8 bg-red-500" />;
		default:
			return null;
	}
};

export default Cell;

import { CellEnum, isWall, type CellType } from "@/entities/cell/model";
import Road from "./Road";
import Wall from "./Wall";
import Finish from "./Finish";

type CellProps = {
	type: CellType;
};

const Cell: React.FC<CellProps> = (props) => {
	const { type } = props;

	switch (type) {
		case CellEnum.ROAD:
			return <Road />;
		case CellEnum.START:
			return <Road />;
		case CellEnum.END:
			return <Finish />;
		default:
			if (isWall(type)) {
				return <Wall cellType={type} />;
			}
			return null;
	}
};

export default Cell;

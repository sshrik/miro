import { CellEnum, type CellType } from "@/entities/cell/model";

type MiniMapCell = {
	cell: CellType;
	isCharacter?: boolean;
};

const MiniMapCell: React.FC<MiniMapCell> = (props) => {
	const { cell, isCharacter } = props;

	if (isCharacter || cell === CellEnum.CHARACTER) {
		return <div className="w-3 h-3 bg-[#2C2C2C]" />;
	}
	if (cell === CellEnum.ROAD) {
		return <div className="w-3 h-3 bg-[#78D53F]" />;
	}
	if (cell === CellEnum.UNKNOWN) {
		return <div className="w-3 h-3 bg-[#000000]" />;
	}
	return <div className="w-3 h-3 bg-[#FAF4E6]" />;
};

export default MiniMapCell;

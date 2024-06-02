import type { Position } from "@/entities/position/model";
import type { MiniMap as MiniMapType } from "@/features/mini-map/model";
import MiniMapCell from "@/features/mini-map/ui/MiniMapCell";

type MiniMapProps = {
	map: MiniMapType;
	now: Position;
};

const MiniMap: React.FC<MiniMapProps> = (props) => {
	const { map, now } = props;

	const centeredMap = map.getCenteredMap(now);

	return (
		<div className="flex flex-col w-28 h-28 rounded-full border-black border-2 overflow-hidden absolute top-4 right-4">
			{centeredMap.map((row, i) => (
				<div key={i} className="flex flex-row">
					{row.map((cell, j) => (
						<MiniMapCell key={`${i}-${j}`} cell={cell} />
					))}
				</div>
			))}
		</div>
	);
};

export default MiniMap;

import { useMazeMap } from "@/hooks/useMazeMap";

export default function GamePage() {
	const maze = useMazeMap(100, 100);

	return (
		<div className="size-full flex flex-col items-center justify-center gap-4">
			<h1 className="text-4xl">게임 화면</h1>
		</div>
	);
}

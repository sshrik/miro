import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="size-full flex flex-col items-center justify-center gap-4">
			<h1 className="text-4xl">미로 게임</h1>
			<Button asChild>
				<Link className="text-sm" href="/game">
					Game Start
				</Link>
			</Button>
		</div>
	);
}

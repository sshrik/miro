"use client";

import StartPage from "@/pages/start/StartPage";
import GamePage from "@/pages/game/GamePage";
import { useState } from "react";

type GameState = "home" | "playing" | "end";

export default function Home() {
	const [gameState, setGameState] = useState<GameState>("home");

	const handleGameStart = () => {
		setGameState("playing");
	};

	const handleGameEnd = () => {
		setGameState("end");
	};

	if (gameState === "home") {
		return <StartPage onGameStart={handleGameStart} />;
	}

	if (gameState === "end") {
		return (
			<div>
				<h1>Game Win</h1>
				<button onClick={() => setGameState("home")}>Restart</button>
			</div>
		);
	}

	return (
		<GamePage
			width={40}
			height={40}
			onGameEnd={handleGameEnd}
			onGameStart={() => {}}
		/>
	);
}

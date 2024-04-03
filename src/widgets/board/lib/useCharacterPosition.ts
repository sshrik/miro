import type { Position } from "@/entities/position/model";
import { create } from "zustand";

type CharacterPosition = Position & {
	setPosition: (row: number, col: number) => void;
	moveLeft: () => void;
	moveRight: () => void;
	moveUp: () => void;
	moveDown: () => void;
};

const useCharacterPosition = create<CharacterPosition>((set) => ({
	row: 0,
	col: 0,
	setPosition: (row: number, col: number) => set({ row, col }),
	moveLeft: () => set((state) => ({ col: state.col - 1 })),
	moveRight: () => set((state) => ({ col: state.col + 1 })),
	moveUp: () => set((state) => ({ row: state.row - 1 })),
	moveDown: () => set((state) => ({ row: state.row + 1 })),
}));

export default useCharacterPosition;

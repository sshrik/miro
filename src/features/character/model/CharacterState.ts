export enum CharacterStateEnum {
	IDLE = "IDLE",
	WALK = "WALK",
	BLOCKED = "BLOCKED",
}

export type CharacterStateType = `${keyof typeof CharacterStateEnum}-${number}`;

export const createCharacterState = (
	state: CharacterStateEnum,
): CharacterStateType => {
	return `${state}-${Math.random()}`;
};

export const isIdleState = (state: CharacterStateType): boolean => {
	return state.startsWith(CharacterStateEnum.IDLE);
};

export const isWalkState = (state: CharacterStateType): boolean => {
	return state.startsWith(CharacterStateEnum.WALK);
};

export const isBlockedState = (state: CharacterStateType): boolean => {
	return state.startsWith(CharacterStateEnum.BLOCKED);
};

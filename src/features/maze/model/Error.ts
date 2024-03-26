class UnacceptableMazeSizeError extends Error {
	constructor() {
		super("Maze width or height must be greater than 0");
	}
}

export default UnacceptableMazeSizeError;

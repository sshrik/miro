import type { CSSProperties } from "react";

export type ModalProps = {
	children: React.ReactNode;
	opened: boolean;
	onClose: () => void;
	styles?: {
		container?: CSSProperties;
	};
};

const Modal: React.FC<ModalProps> = (props) => {
	const { children, opened, onClose, styles } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		opened && (
			<div
				className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
				onClick={handleClose}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="bg-white p-4 rounded-lg drop-shadow-md"
					style={styles?.container}
				>
					{children}
				</div>
			</div>
		)
	);
};

export default Modal;

import type { CSSProperties, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

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

	const handleClose: MouseEventHandler = (e) => {
		e.stopPropagation();
		onClose();
	};

	return (
		opened &&
		createPortal(
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
			</div>,
			document.body,
		)
	);
};

export default Modal;

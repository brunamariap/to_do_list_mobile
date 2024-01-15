import React from 'react';
import { Modal as ModalCompoenent } from 'react-native';
import { OverlayContainer } from './styles';
import { ContainerCenter } from '../../styles/global';

interface ModalProps {
	children: React.ReactNode;
	visible: boolean;
	setVisible: () => void;
};

const Modal = ({
	children,
	visible,
	setVisible,
}: ModalProps) => {
	return (
		<ModalCompoenent
			animationType="fade"
			statusBarTranslucent={true}
			transparent={true}
			visible={visible}
			onRequestClose={() => setVisible()}>
			<OverlayContainer></OverlayContainer>
			<ContainerCenter>
				{children}
			</ContainerCenter>
		</ModalCompoenent>
	);
};

export default Modal;

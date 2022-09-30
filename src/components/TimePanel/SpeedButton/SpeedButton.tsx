/** @format */

import { FC, ReactNode, useContext } from 'react';
import { FieldContext } from '../../../common/Field/FieldContext';

interface SpeedButtonProps {
	children: ReactNode;
	valueSpeed: number;
}

const SpeedButton: FC<SpeedButtonProps> = ({ children, valueSpeed }) => {
	const { setSpeed, speed } = useContext(FieldContext);

	return (
		<button
			className={'arrow ' + (speed === valueSpeed && 'active')}
			onClick={() => setSpeed(valueSpeed)}>
			{' '}
			{children}
		</button>
	);
};

export default SpeedButton;

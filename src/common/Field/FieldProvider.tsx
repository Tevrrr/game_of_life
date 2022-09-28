/** @format */

import { FC, useState, useEffect, ReactNode } from 'react';
import { ICell } from '../types/Cell';
import { FieldContext, initialFieldContext } from './FieldContext';
import { nextMoveField, randomFillField } from './FiledHandler';

interface FieldProviderProps {
	children: ReactNode;
}

const FieldProvider: FC<FieldProviderProps> = ({ children }) => {
	const [field, setField] = useState(initialFieldContext);
	const [timerStatus, setTimerStatus] = useState<boolean>(false);
    const [speed, setSpeed] = useState(1000);

	useEffect(() => {
		const timerID =
			timerStatus &&
			setTimeout(() => {
				setField(nextMoveField(field));
			}, speed);
		return () => {
			if (timerID) clearInterval(timerID);
		};
    }, [timerStatus, field, speed]);
    
    const toggleCell = (targetCell: ICell) => {
        const { x, y } = targetCell;
		let updatedField = field;
		updatedField[y][x] = { ...targetCell, live: !targetCell.live };
		setField([...updatedField]);
    };

	const timerToggle = () => {
		setTimerStatus(!timerStatus);
    };
    const setValueSpeed = (value:number) => setSpeed(value)
	return (
		<FieldContext.Provider
			value={{
				field,
				timerStatus,
				toggleCell,
				randomFillField: randomFillField(field, (value) =>
					setField(value)
				),
				timerToggle,
				setSpeed: setValueSpeed,
			}}>
			{children}
		</FieldContext.Provider>
	);
};

export default FieldProvider;

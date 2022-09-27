/** @format */

import { FC, useState, useEffect, ReactNode } from 'react';
import { FieldContext, initialFieldContext } from './FieldContext';
import { nextMoveField, randomFillField, toggleCell } from './FiledHandler';

interface FieldProviderProps {
	children: ReactNode;
}

const FieldProvider: FC<FieldProviderProps> = ({ children }) => {
	const [field, setField] = useState(initialFieldContext);
	const [pause, setPause] = useState<boolean>(true);


	useEffect(() => {
		const timer =
			!pause &&
			setTimeout(() => {
				setField(nextMoveField(field));
			}, 200);
		return () => {
			if (timer) clearInterval(timer);
		};
	}, [pause, field]);

	const pauseToggle = () => {
		setPause(!pause);
	};
	return (
		<FieldContext.Provider
			value={{
				field,
				toggleCell: toggleCell(field, (value) => setField(value)),
				randomFillField: randomFillField(field, (value) =>
					setField(value)
				),
				pauseToggle,
			}}>
			{children}
		</FieldContext.Provider>
	);
};

export default FieldProvider;

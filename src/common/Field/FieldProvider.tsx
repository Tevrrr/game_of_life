/** @format */

import { FC, useState, ReactNode } from 'react';
import { FieldContext, initialFieldContext } from './FieldContext';
import { randomFillField, toggleCell } from './FiledHandler';

interface FieldProviderProps {
	children: ReactNode;
}

const FieldProvider: FC<FieldProviderProps> = ({ children }) => {
	const [field, setField] = useState(initialFieldContext);
	return (
		<FieldContext.Provider
			value={{
				field,
				toggleCell: toggleCell(field, (value) => setField(value)),
				randomFillField: randomFillField(field, (value) =>setField(value)),
			}}>
			{children}
		</FieldContext.Provider>
	);
};

export default FieldProvider;

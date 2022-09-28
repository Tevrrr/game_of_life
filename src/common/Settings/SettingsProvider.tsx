/** @format */

import { FC,  ReactNode } from 'react';
import { FieldContext} from './SettingsContext';


interface FieldProviderProps {
	children: ReactNode;
}

const FieldProvider: FC<FieldProviderProps> = ({ children }) => {

	return (
		<FieldContext.Provider
			value={{}}>
			{children}
		</FieldContext.Provider>
	);
};

export default FieldProvider;

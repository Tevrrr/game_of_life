/** @format */

import { createContext } from 'react';
import { ICell } from '../types/Cell';
import { enumArr } from './FiledHandler';

const Field: ICell[][] = new Array(80).fill(
	new Array<ICell>(150).fill({ live: false, x: 1, y: 1 })
);
export const initialFieldContext: ICell[][] = enumArr(Field, (item, x, y) => {
	return { live: Math.random() > 0.5, x, y };
});

export const FieldContext = createContext({
	field: initialFieldContext,
	toggleCell: (x: number, y: number) => {},
	randomFillField: () => {},
	pauseToggle: () => {},
});

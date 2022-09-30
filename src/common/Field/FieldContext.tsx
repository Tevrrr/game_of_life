/** @format */

import { createContext } from 'react';
import { enumArr } from '../helpers/FieldHelpers';
import { ICell } from '../types/Cell';


const Field: ICell[][] = new Array(80).fill(
	new Array<ICell>(150).fill({ live: false, x: 1, y: 1 })
);

export const initialFieldContext: ICell[][] = enumArr(Field, (item, x, y) => {
	return { live: Math.random() > 0.5, x, y };
});

export const FieldContext = createContext({
	field: initialFieldContext,
	timerStatus: false,
	speed: 1000,
	toggleCell: (targetCell: ICell) => {},
	randomFillField: () => {},
	timerToggle: () => {},
	setSpeed: (value: number) => {},
});

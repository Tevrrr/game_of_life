import { createContext } from 'react'
import { ICell } from '../types/Cell';

export const initialFieldContext: ICell[][] = new Array(25).fill(new Array<ICell>(40).fill({live: false}))

export const FieldContext = createContext({
	field: initialFieldContext,
	toggleCell: (x: number, y: number) => {},
	randomFillField: () => {},
});
 

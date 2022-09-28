/** @format */

import { countingSurroundingCells, enumArr } from '../helpers/FieldHelpers';
import { ICell } from '../types/Cell';

export const toggleCell = (
	value: ICell[][],
	setValue: (value: ICell[][]) => void
): ((targetCell: ICell) => void) => {
    return (targetCell: ICell) => {
        const {x, y} = targetCell
        let updatedField = value;
        console.log(updatedField[y][x]);
        updatedField[y][x] = {...targetCell, live: !targetCell.live}
        console.log(updatedField[y][x]);
		setValue(updatedField);
	};
};

export const randomFillField = (
	value: ICell[][],
	setValue: (value: ICell[][]) => void
): (() => void) => {
	return () => {
		setValue(
			enumArr(value, (item, x, y) => {
				return { live: Math.random() > 0.5, x, y };
			})
		);
	};
};

export const nextMoveField = (value: ICell[][]): ICell[][] => {
	return value.map((line) => {
		return line.map((item) => {
			const numberLiveCells: number = countingSurroundingCells(
				value,
				item
			);
			if (!item.live && numberLiveCells === 3) {
				return { ...item, live: true };
			}
			if (item.live && (numberLiveCells === 2 || numberLiveCells === 3)) {
				return { ...item, live: true };
			}
			if (item.live && (numberLiveCells < 2 || numberLiveCells > 3)) {
				return { ...item, live: false };
			}

			return item;
		});
	});
};

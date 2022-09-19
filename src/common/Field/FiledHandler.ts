/** @format */

import { ICell } from '../types/Cell';

const enumArr = (
	value: ICell[][],
	props: (item: ICell, x: number, y: number, line: ICell[]) => ICell
) => {
	return value.map((line, y) => {
		return line.map((item, x) => {
			return props(item, x, y, line);
		});
	});
};

export const toggleCell = (
	value: ICell[][],
	setValue: (value: ICell[][]) => void
): ((x: number, y: number) => void) => {
	return (findX: number, findY: number) => {
		setValue(
			enumArr(value, (item, x, y) => {
				if (findX === x && findY === y) {
					return { ...item, live: !item.live };
				} else return item;
			})
		);
	};
};

export const randomFillField = (
	value: ICell[][],
	setValue: (value: ICell[][]) => void
): (() => void) => {
	return () => {
		setValue(
			enumArr(value, (item) => {
				return { ...item, live: Math.random() > 0.5 };
			})
		);
	};
};

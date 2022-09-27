/** @format */

import { ICell } from '../types/Cell';

export const enumArr = (
	value: ICell[][],
	props: (item: ICell, x: number, y: number, line: ICell[]) => ICell
) => {
	return value.map((line, y) => {
		return line.map((item, x) => {
			return props(item, x, y, line);
		});
	});
};

//  targetCells:
//  [x-1|y+1][ x |y+1][x+1|y+1]
//  [x-1| y ][ x | y ][x+1| y ]
//  [x-1|y-1][ x |y-1][x+1|y-1]

const countingSurroundingCells = (
	arr: ICell[][],
	centralСell: ICell
): number => {
	const { x, y } = centralСell;
	const targetCells: { x: number; y: number }[] = [
		{ x: x, y: y + 1 },
		{ x: x + 1, y: y + 1 },
		{ x: x + 1, y: y },
		{ x: x + 1, y: y - 1 },
		{ x: x, y: y - 1 },
		{ x: x - 1, y: y - 1 },
		{ x: x - 1, y: y },
		{ x: x - 1, y: y + 1 },
	];
	return targetCells.reduce((count, item) => {
		const within: boolean =
			item.x >= 0 &&
			item.x < arr[0].length &&
			item.y >= 0 &&
			item.y < arr.length;
		if (within) {
			if (arr[item.y][item.x].live) return count + 1;
		}
		return count;
	}, 0);
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
				if (
					item.live &&
					(numberLiveCells === 2 || numberLiveCells === 3)
				) {
					return { ...item, live: true };
				}
				if (item.live && (numberLiveCells < 2 || numberLiveCells > 3)) {
					return { ...item, live: false };
				}

				return item;
			});
		});

};

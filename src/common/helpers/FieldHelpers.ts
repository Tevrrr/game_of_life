/** @format */

import { ICell } from "../types/Cell";

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

export const countingSurroundingCells = (
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

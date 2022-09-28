/** @format */

import { FC, useContext } from 'react';
import { FieldContext } from '../../common/Field/FieldContext';
import { ICell } from '../../common/types/Cell';
import './Cell.css';

interface CellProps {
	value: ICell;
}

const Cell: FC<CellProps> = ({ value }) => {
	const { toggleCell } = useContext(FieldContext);
	const { live } = value;
	const click = () => {
		toggleCell(value);
	};
	return <div onClick={click} className={live ? 'activeCell' : 'cell'}></div>;
};

export default Cell;

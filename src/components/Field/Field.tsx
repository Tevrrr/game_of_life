/** @format */

import { FC, useContext } from 'react';
import { FieldContext } from '../../common/Field/FieldContext';
import Cell from '../Cell/Cell';
import './Field.css'

interface FieldProps {}

const Field: FC<FieldProps> = () => {
    const { field } = useContext(FieldContext);
	return (
		<div className='Fild'>
			{field.map((line, y) => {
				return (
					<div className='Line'>
						{line.map((cell, x) => {
							return <Cell x={x} y={y} live={cell.live} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Field;

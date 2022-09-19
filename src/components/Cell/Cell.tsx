import { FC, useContext } from 'react';
import { FieldContext } from '../../common/Field/FieldContext';
import './Cell.css'

interface CellProps {
    x: number,
    y: number,
    live: boolean
}

const Cell: FC<CellProps> = ({ x, y, live }) => {
    const { toggleCell } = useContext(FieldContext)
    const click = () => {
        toggleCell(x, y)
    }
	return <div onClick={click} className={live ? 'activeCell' : 'cell'}></div>;
};

export default Cell;

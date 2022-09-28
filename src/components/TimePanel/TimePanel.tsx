import { FC, useContext } from 'react';
import { FieldContext } from '../../common/Field/FieldContext';
import './TimePanel.css';

interface TimePanelProps {};

const TimePanel: FC<TimePanelProps> = () => {
    const { timerToggle, timerStatus, setSpeed } = useContext(FieldContext);
    const toggleSpeed = (value: number): ()=>void => {
        return () => {
            setSpeed(value)
        }
    }
    return (
		<div className='TimePanel'>
			<div>
				<button onClick={timerToggle}>{timerStatus ? 'P' : 'S'}</button>
				<button onClick={toggleSpeed(1000)}>t1</button>
				<button onClick={toggleSpeed(500)}>t2</button>
				<button onClick={toggleSpeed(250)}>t3</button>
			</div>
		</div>
	);
}

export default TimePanel;
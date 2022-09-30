import { FC,  useContext } from 'react';
import { FieldContext } from '../../common/Field/FieldContext';
import SpeedButton from './SpeedButton/SpeedButton';
import './TimePanel.css';

interface TimePanelProps {};

const TimePanel: FC<TimePanelProps> = () => {
    const { timerToggle, timerStatus } = useContext(FieldContext);

    return (
		<div className='TimePanel'>
			<button onClick={timerToggle}>
				{timerStatus ? (
					<i className='fa-solid fa-pause'></i>
				) : (
					<i className='fa-solid fa-play'></i>
				)}
			</button>
			<SpeedButton valueSpeed={1000}>
				<i className='fa-solid fa-angle-right'></i>
			</SpeedButton>
			<SpeedButton valueSpeed={500}>
				<i className='fa-solid fa-angle-right'></i>
				<i className='fa-solid fa-angle-right'></i>
			</SpeedButton>
			<SpeedButton valueSpeed={250}>
				<i className='fa-solid fa-angle-right'></i>
				<i className='fa-solid fa-angle-right'></i>
				<i className='fa-solid fa-angle-right'></i>
			</SpeedButton>
		</div>
	);
}

export default TimePanel;
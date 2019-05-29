import React from 'react';
import AddTask from './AddTask';

const now = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const currentDay = now.getDate();
const currentDayOfWeek = days[now.getDay()];
const currentMonth = months[now.getMonth()];

const exactDate = `${currentDayOfWeek} ${currentMonth}, ${currentDay}`

const Header = (props) => (
	<div className="header">
		<div>
			<p className="date">{exactDate}</p>
			<p className="number-of-tasks">{props.tasks.length} Active Tasks</p>
		</div>
		<AddTask 
			handleAddTask={props.handleAddTask}
		/>
	</div>
);

export default Header;
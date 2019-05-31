import React from 'react';
import Task from './Task';

const CompletedTasks = (props) => (
	<div className="tasks">
		{props.completedTasks.length !== 0 && <p>Completed Tasks</p>}
		{
			props.completedTasks.map((item, index) => (
				<Task
					key={item}
					taskText={item}
					completedTaskText={item}
					handleDeleteTask={props.handleDeleteTask}
				/>
			))
		}
	</div>
);

export default CompletedTasks;
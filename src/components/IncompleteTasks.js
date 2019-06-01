import React from 'react';
import Task from './Task';

const IncompleteTasks = (props) => (
	<div className="tasks">
		{props.tasks.length === 0 && <p className="no-tasks">You currently have <span className="blue">0</span> tasks. Add a task to get started!</p>}
		{
			props.tasks.map((item, index) => (
				<Task
					key={item}
					taskText={item}
					handleDeleteTask={props.handleDeleteTask}
					handleCompleteTask={props.handleCompleteTask}
				/>
			))
		}
	</div>
);

export default IncompleteTasks;
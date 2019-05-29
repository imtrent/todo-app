import React from 'react';
import Task from './Task';

const Tasks = (props) => (
	<div className="tasks">
		{
			props.tasks.map((item, index) => (
				<Task
					key={item}
					taskText={item}
					handleDeleteTask={props.handleDeleteTask}
				/>
			))
		}
	</div>
);

export default Tasks;
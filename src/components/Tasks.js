import React from 'react';
import Task from './Task';

const Tasks = (props) => (
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

		{props.completedTasks.length !== 0 && <p>Completed Tasks</p>}
		{
			props.completedTasks.map((item, index) => (
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
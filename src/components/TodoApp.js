import React from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default class TodoApp extends React.Component {
	state = {
		tasks: ['Client meeting @ 2:30pm', 'Design app interface', 'Learn Node.js']
	};

	handleAddTask = (task) => {
		if (!task) {
			return 'Please enter in a task';
		} else if (this.state.tasks.indexOf(task) > -1) {
			return 'This task already exists';
		}

		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(task)
		}));
	};

	render() {
		return (
			<div className="container">
				<AddTask 
				handleAddTask={this.handleAddTask}
				/>
				<Tasks 
				tasks={this.state.tasks}
				/>
			</div>
		);
	}
}
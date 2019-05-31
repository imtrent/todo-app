import React from 'react';
import Tasks from './Tasks';
import CompletedTasks from './CompletedTasks';
import Header from './Header';

export default class TodoApp extends React.Component {
	state = {
		tasks: ['Client meeting @ 2:30pm', 'Design app interface', 'Learn Node.js'],
		completedTasks: []
	};

	handleAddTask = (task) => {
		if (!task) {
			return 'Please enter in a task';
		} else if (this.state.tasks.indexOf(task) > -1 || this.state.completedTasks.indexOf(task) > -1) {
			return 'This task already exists';
		}

		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(task)
		}));
	};

	handleCompleteTask = (taskToComplete) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter((task) => taskToComplete !== task),
			completedTasks: prevState.completedTasks.concat(taskToComplete)
		}));
	};

	handleDeleteTask = (taskToRemove) => {
		if (this.state.tasks.indexOf(taskToRemove) > -1) {
			this.setState((prevState) => ({
				tasks: prevState.tasks.filter((task) => taskToRemove !== task)
			}));
		} else if (this.state.completedTasks.indexOf(taskToRemove) > -1) {
			this.setState((prevState) => ({
				completedTasks: prevState.completedTasks.filter((task) => taskToRemove !== task)
			}));
		}
	};

	render() {
		return (
			<div className="container">
				<Header 
					tasks={this.state.tasks}
					handleAddTask={this.handleAddTask}
				/>
				<Tasks 
					tasks={this.state.tasks}
					completedTasks={this.state.completedTasks}
					handleDeleteTask={this.handleDeleteTask}
					handleCompleteTask={this.handleCompleteTask}
				/>
				{/* <CompletedTasks 
					completedTasks={this.state.completedTasks}
					handleDeleteTask={this.handleDeleteTask}
				/> */}
			</div>
		);
	}
}
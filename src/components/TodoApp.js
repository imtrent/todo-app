import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from './Header';
import IncompleteTasks from './IncompleteTasks';
import CompletedTasks from './CompletedTasks';

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
				<BrowserRouter>
					<div>
						<Header
							tasks={this.state.tasks}
							handleAddTask={this.handleAddTask}
						/>
						<Switch>
							<Route path="/" render={props => 
								<IncompleteTasks 
									tasks={this.state.tasks}
									handleDeleteTask={this.handleDeleteTask} 
									handleCompleteTask={this.handleCompleteTask} 
								/>} 
								exact={true}
							/>
							<Route path="/completed" render={props =>
								<CompletedTasks
									completedTasks={this.state.completedTasks}
									handleDeleteTask={this.handleDeleteTask}
								/>}
								exact={true}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
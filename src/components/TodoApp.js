import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

	handleRecoverTask = (taskToRecover) => {
		this.setState((prevState) => ({
			completedTasks: prevState.completedTasks.filter((task) => taskToRecover !== task),
			tasks: prevState.tasks.concat(taskToRecover)
		}));
	};

	componentDidMount() {
		try {
			const tasksJson = local.Storage.getItem('tasks');
			const completedJson = local.Storage.getItem('completedTasks');
			const tasks = JSON.parse(tasksJson);
			const completed = JSON.parse(completedJson);

			if (tasks) {
				this.setState(() => ({ tasks }));
			}

			if (completed) {
				this.setState(() => ({ completed }));
			}
		} catch (e) {
			// Do Nothing
		}
	}

	componentDidUpdate(prevPros, prevState) {
		if (prevState.tasks.length !== this.state.tasks.length) {
            const tasksJson = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks', tasksJson);
        }

        if (prevState.completedTasks.length !== this.state.completedTasks.length) {
            const completedJson = JSON.stringify(this.completedTasks.tasks);
            localStorage.setItem('completedTasks', completedJson);
        }
	}

	componentWillUnmount() {
        console.log('component will unmount');
    }

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header
							tasks={this.state.tasks}
							completedTasks={this.state.completedTasks}
							location={window.location.pathname}
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
									handleRecoverTask={this.handleRecoverTask}
								/>}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
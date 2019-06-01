import React from 'react';

export default class AddTask extends React.Component {
	state = {
		err: undefined
	};

	handleAddTask = (e) => {
		e.preventDefault();
		
		const task = e.target.elements.task.value.trim();
		const err = this.props.handleAddTask(task);

		this.setState(() => ({ err }));

		if (!err) {
			e.target.elements.task.value = '';
		}
	};

	render() {
		return(
			<div className="add-task">
				<form onSubmit={this.handleAddTask}>
					<input type="text" name="task" placeholder="Enter a task..."/>
					<button>Add Task</button>
				</form>
				{this.state.err && <p className="error">{this.state.err}</p>}
			</div>
		);
	}
}
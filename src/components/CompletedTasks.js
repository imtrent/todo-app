import React from 'react';

const CompletedTasks = (props) => (
	<div className="tasks">
		{
			props.completedTasks.map((task, index) => (
				<div className="task" key={index}>
					<svg
						onClick={(e) => {
							props.handleRecoverTask(task);
						}}
						className="recover"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M154.7 213.3H16a16 16 0 0 1-16-16V58.7a16 16 0 0 1 32 0v122.6h122.7a16 16 0 0 1 0 32zm0 0"/>
						<path d="M256 512a254.1 254.1 0 0 1-181-75 16 16 0 1 1 22.7-22.7A222.3 222.3 0 0 0 256 480c123.5 0 224-100.5 224-224S379.5 32 256 32C150.1 32 55.7 103.1 31.6 201.2a16 16 0 1 1-31.1-7.7C28.2 81.4 135.6 0 256 0c141.2 0 256 114.8 256 256S397.2 512 256 512zm0 0"/>
					</svg>
					<p className="text text--completed">{task}</p>
					<svg 
						onClick={(e) => {
							props.handleDeleteTask(task);
						}}
						className="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none">
					  	<path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"/>
					  	<path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"/>
					</svg>
				</div>
			))
		}
	</div>
);
// check-mark check-mark--completed
export default CompletedTasks;
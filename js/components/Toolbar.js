import React, { Component } from 'react';
import AddUser from './AddUser';


export default class Toolbar extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div className="toolbar col-sm-9">
				<button className="toolbar__btn btn btn-default" onClick={()=> this.props.sort('age')}>
					<span className={`glyphicon glyphicon-sort-by-attributes${this.props.directionA}`}></span> Сортировать по возрасту
				</button>
				<button className="btn btn-default" onClick={()=> this.props.sort('name')}>
					<span className={`glyphicon glyphicon-sort-by-attributes${this.props.directionN}`}></span> Сортировать по имени
				</button>
				<AddUser add={this.props.add}/>
			</div>
		)
	}
} 

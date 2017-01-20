import React, { Component } from 'react';

export default class AddUser extends React.Component {



	render() {

		return(
			<button className="toolbar__btn btn btn-default" onClick={this.props.add}>
				Добавить пользователя
			</button>
		)
	}
} 
import React, { Component } from 'react';

export default class ActiveUser extends React.Component {

	render() {
		if (!this.props.data || !this.props.data[this.props.active]) { return <h3>Совсем ничего нет :(</h3>; }
		const active = this.props.active;
		const user = this.props.data[active];

		return(
			<div className="active-user col-sm-3">
				<div className="active-user__info">
					<div className="active-user__photo">
						<img src={`images/${user.image}.svg`} width='100px' height='100px'/>
					</div>
					<p className="active-user__name"><strong>Name:</strong> {user.name}</p>
					<p className="active-user__phone"><strong>Phone:</strong> {user.phone}</p>
					<p className="active-user__phrase"><strong>Phrase:</strong> {user.phrase}</p>
				</div>
			</div>
		)
	}
} 
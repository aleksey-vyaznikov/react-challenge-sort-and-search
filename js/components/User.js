import React, { Component } from 'react';



export default class User extends React.Component {


	render() {
		return(
			<tr className="list__item" onClick={() => this.props.update({ active: this.props.index })}>
				<td><img src={`images/${this.props.user.image}.svg`} width='60px' hieght='60px'/></td>
				<td className="list__item__name">{this.props.user.name}</td>
				<td>{this.props.user.age}</td>
				<td className="list__item__phone">{this.props.user.phone}</td>
			</tr>
		)
	}
} 
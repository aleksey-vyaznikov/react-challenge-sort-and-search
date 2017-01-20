 import React, { Component } from 'react';
import User from './User';

export default class UserList extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		if (!this.props.data||this.props.data.length == 0) { return false; }
		return(
			<div>
				<table className="list col-md-9">
					<tbody>
						<tr>
							<th>Img</th>
							<th>Name</th>
							<th>Age</th>
							<th>Phone</th>
						</tr>
							{
								this.props.data.map((user,index)=>{
									return <User key={user.id} user={user} update={this.props.update} index={index}/>;
								})
							}
					</tbody>
				</table>
			</div>
		)
	}
} 
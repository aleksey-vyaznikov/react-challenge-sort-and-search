import React, { Component } from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<div className="search col-sm-3">
				<input type="text" className="form-control" onChange={(e)=>this.props.search(e)} placeholder="Search" />
			</div>
		)
	}
} 

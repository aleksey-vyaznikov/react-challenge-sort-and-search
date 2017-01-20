import React, { Component } from 'react';
import loadFile from './functions/loadFile';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import Search from './components/Search';




export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null,
			active: 0,
			sort: '',
			directionN: '',
			directionA: '',
		};
		this.load();
	}

	load() {
		loadFile('./data.json').then(users =>{
				this.trueData = JSON.parse(users);
				this.setState({
					data: this.trueData
				});
			}
		);
	}

	sort(param) {
		let data = this.state.data.slice();
		function reverse() {
			return data.reverse();
		}

		function sortBY() {
			return data.sort(function(obj1, obj2) {
				if (obj1[param] < obj2[param]) return -1;
				if (obj1[param] > obj2[param]) return 1;
				return 0;}
			);
		}
		if (param == 'age') {
			var directionN = '';
			var directionA = this.state.directionA === '' ? '-alt' : '';
		}else{
			var directionA = '';
			var directionN = this.state.directionN === '' ? '-alt' : '';
		}
		var displayedUsers = this.state.sort === param ? reverse(): sortBY();

		this.updateData({
			data: displayedUsers,
			sort: param,
			directionN: directionN,
			directionA: directionA
		});
	}

	search(e) {
		var self = this;
		var search = e.target.value.toLowerCase();
		var displayedUsers = self.trueData.filter(function(el) {
			var name = el.name.toLowerCase(); 
			return name.indexOf(search) !== -1;
		});
		this.updateData({
			data: displayedUsers,
			active: 0
		});
	}

	updateData(config) {
		this.setState(config);
	}

	add(){
		console.log('add');
		let data = this.state.data(...this.state.data);
		var displayedUsers = data.push(...data);
		this.updateData({
			data: displayedUsers,
		});
	}

	render() {
		return (
			<div className="container app">
				<div className="row">
					<Search data={this.trueData} search={this.search.bind(this)}/>
					<Toolbar sort={this.sort.bind(this)} directionN={this.state.directionN} directionA={this.state.directionA} add={this.add.bind(this)}/>
				</div>
				<div className="row">
					<ActiveUser data={this.state.data} active={this.state.active}/>
					<UserList data={this.state.data} update={this.updateData.bind(this)}/>
				</div>
			</div>

		);
	}
}

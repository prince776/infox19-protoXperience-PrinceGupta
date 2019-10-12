import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import TaskImg from './TaskImg.jpg';
import './Task.css';

//This class will have to take information about each task from DB
class Task extends Component{

	state = {
	};
	componentDidMount(){

	}

	render(){
		return (
			<div class = 'container-fluid text-center'>
					<img src = {TaskImg} class = 'img' />
					<br/>
					<br/>
					<h1><strong>TASK:</strong> Android game testing </h1>
					<br/>
					<br/>
					<h2><strong>Aim:Test my android game</strong></h2>
					<br/>
					<br/>
					<hr/>
					<h4 class = 'desc'><strong>Description:</strong><br/> You have to test my game "Destroyers" and have to find as many
					bugs and errors as possible. These can include bugs related to game mechanics, rendering and audio.
					<br/>
					<br/>
					<hr/>

					</h4>
					<br/>
					<h4 class='desc'><strong>Rewards:<br/></strong>
					1)Game testing experince certificate<br/>
					2)50USD<br/>
					3)Recommendations for other android game testing tasks</h4>
					<br/>
					<br/>
					<hr/>

					<br/>
					<h4 class = 'desc'><strong>Issuer</strong><br/>
					Name:Sam gates<br/>
					contact:samg99@gmail.com
					</h4>
			</div>
		);
	}


}

export default Task
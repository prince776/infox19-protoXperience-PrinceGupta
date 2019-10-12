import React, {Component} from 'react'
import {Redirect,Link} from 'react-router-dom'
import './Home.css';
import HomeImg from './HomeImg.png'

class Home extends Component{

	state = {
		
	}

	componentDidMount(){
		this.setState({
		
		});
		
	}

	
	render(){

		// const {
			
		// } = this.state;

	

		return(

				<div className = "container-fluid text-center" id ='home'>
					<br/>
					<br/>
					<div id = 'headline'>Start working now</div>
					<br/>
					<br/>

					<div className = 'options'>
						<Link to = '/tasksOrg'  >As an organization</Link>
					
						<br/>
						<br/>

						<Link to ='/tasksIndiv' >As an individual</Link>
						<br/>
						<br/>
					</div>

					<div>
					<img src = {HomeImg} class ='imgH'/>
					</div>
				</div>
		)
	}

}

export default Home;
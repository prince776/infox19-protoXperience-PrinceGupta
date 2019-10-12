import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import profileIcon from './profileIcon.png'
import './Profile.css'
class Profile extends Component{
	state={
			
		};	

	componentDidMount(){
		this.setState({
			
		});
	}

	render(){

		

		return(
			<div class = 'container-fluid text-center'>
				<br/>
				<br/>

				<h2><strong>Your Profile</strong></h2>
				<br/>
				<br/>				
				<img src={profileIcon} class = 'imgP' alt="You" />
				<br/>
				<h4><strong>NAME</strong></h4>
				<p>A young community volunteering enthusiast</p>
				<br/>

				<div>
				<h2>Things you did</h2>
				<div class="table-responsive">          
			  	<table class="table table-hover">
			    <tbody>
			      <tr>
			        <td><Link to = '/task' class = 'link'>Task1</Link></td>
			      </tr>

			      <tr>
			        <td><Link to = '/task' class = 'link'>Task2</Link></td>
			      </tr>

			      <tr>
			        <td><Link to = '/task' class = 'link'>Task2</Link></td>
			      </tr>
			    </tbody>
			  </table>

			  </div>
				</div>
				<br/>
				<div>
				<h2>Things you're doing</h2>
				<div class="table-responsive">          
			  	<table class="table table-hover">
			    <tbody>
			      <tr>
			        <td><Link to = '/task' class = 'link'>Task1</Link></td>
			      </tr>

			      <tr>
			        <td><Link to = '/task' class = 'link'>Task2</Link></td>
			      </tr>  
			    </tbody>
			  </table>
			  
			  </div>
				</div>

			</div>
		);
	}

}

export default Profile
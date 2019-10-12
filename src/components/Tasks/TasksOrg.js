import React , {Component} from 'react';
import {Link} from 'react-router-dom';
//Class to check some functionalities of react js
class TasksOrg extends Component{

	state = {
		something:''
	};
	componentDidMount(){

	}

	render(){
		//return <Redirect to='/profile' />
		return (
			<div>
				<br/>
				<br/>
				<h1>Tasks For Your Organization</h1>
				<br/>
				<br/>

			 <div class="table-responsive">          
			  <table class="table table-hover">
			    <thead>
			      <tr>
			        <th>Issuers</th>
			        <th>Tasks</th> 
			        <th>Cash Reward</th> 
			        
			      </tr>
			    </thead>

			    <tbody>
			      <tr>
			        <td>Ajay Thakur</td>
			        <td><Link to = '/task' class = 'link'>Collect all garbage from Mehrauli street 11</Link></td>
					<td>5,000 INR</td>
			      </tr>

			      <tr>
			        <td>John Gates</td>
			        <td><Link to = '/task' class = 'link'>Develop a game engine for 2D RPG type games</Link></td>
					<td>10,000 USD</td>			        
			      </tr>

			      <tr>
			        <td>Indian Government</td>
			        <td><Link to = '/task' class = 'link'>Provide shelter facilities to people</Link></td>
					<td>50,000 INR</td>			        
			      </tr>

			    </tbody>
			  </table>
			  </div>

			</div>
		);
	}


}

export default TasksOrg
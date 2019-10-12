import React , {Component} from 'react';
import {Link} from 'react-router-dom';

//Class to check some functionalities of react js
class TasksIndiv extends Component{

	state = {
	};
	componentDidMount(){

	}

	render(){
		//return <Redirect to='/profile' />
		return (
			<div>
				<br/>
				<br/>
				<h1>Tasks For You</h1>
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
			        <td>Sam Gates</td>
			        <td><Link to = '/task' class = 'link'>Android game testing</Link></td>
			        <td>100 USD</td>
			      </tr>

			      <tr>
			        <td>USIT</td>
			        <td><Link to = '/task' class = 'link'>Speaking in ML workshop</Link></td>
			        <td>2,000 INR</td>			        
			      </tr>

			      <tr>
			        <td>Indian Government</td>
			        <td><Link to = '/task' class = 'link'>Provide information about highly littered places</Link></td>
			        <td>50 INR</td>			        
			      </tr>

			    </tbody>
			  </table>
			  </div>

			</div>
		);
	}


}

export default TasksIndiv
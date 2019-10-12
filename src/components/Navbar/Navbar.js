import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css';

class Navbar extends Component{
	state = {
	}

	render(){
		return(
	  		


			<div id = 'nav' class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top hidden-phone">
			  <ul class="navbar-nav">
			    <li class="nav-item">
			      <Link class="nav-link active" to = '/'>Home</Link>
			    </li>
			    <li class="nav-item">
			      <Link class="nav-link" to = '/profile'>Profile</Link>
			    </li>

			    <li class="nav-item dropdown">
			      <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
			        Tasks
			      </a>
			      <div class="dropdown-menu">
			        <Link class="dropdown-item" to = '/tasksIndiv'>Individual</Link>
			        <Link class="dropdown-item" to = '/tasksOrg'>Organization</Link>
			      </div>
			    </li>
			  </ul>
			</div>


		);
	}

}

export default Navbar;
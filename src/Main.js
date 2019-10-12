import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './components/Home/Home.js'
import Profile from './components/Profile/Profile.js'
import TasksIndiv from './components/Tasks/TasksIndiv.js'
import TasksOrg from './components/Tasks/TasksOrg.js'
import Task from './components/Tasks/Task.js'

import Test from './components/Test.js'

const Main = ()=>(
	<Switch>
		<Route exact path='/' component = {Home}></Route> 
		<Route exact path='/profile' component = {Profile}></Route>                                     
		<Route exact path='/test' component = {Test}></Route>
		<Route exact path='/TasksIndiv' component = {TasksIndiv}></Route>
		<Route exact path='/TasksOrg' component = {TasksOrg}></Route>
		<Route exact path='/task' component = {Task}></Route>
		                                     
	</Switch>
);

export default Main;
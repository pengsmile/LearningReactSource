import { h, Component, createContext } from '../../preact';
import './style.css';

import {wrapContext, theme } from './themeContext';
import ThemeTogglerButton from './ThemeButton'

class Header extends Component{
    render() {
		return (
			<div>

			</div>
		);
    }
}

class Main extends Component{
    render() {
         return (
             <div>
                 <Content />
             </div>
         )
    } 
}


 
 class Content extends Component{

	render() {
		 return (
			 <div >
				 这里是内容部分
			 </div>
		 )
	} 
 }
export default class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			time: new Date().getTime(),
			count: 10,
			color: 'red',
			Theme: theme.light,
			toggleTheme: this.toggleTheme,
			something: 'this is provider'
		};
	}
	// update the current time
	updateTime = () => {
		this.setState({ time: new Date().getTime() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};
	toggleTheme = ()=>{
        this.setState(state=>({
            Theme: state.Theme === theme.dark ?
            theme.light : theme.dark
        }));
    }
	componentWillMount(){
		console.clear()
	}
	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		// this.timer = setInterval(this.updateTime, 1000);
	}
	componentWillReceiveProps(){

	}
	componentWillUpdate(){

	}
	getSnapshotBeforeUpdate(){

	}
	// gets called just before navigating away from the route
	componentWillUnmount() {
		// clearInterval(this.timer);
	}
	
	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, something }) {
		console.log(something)
		return (
			<div class="profile">
				<Main />
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
				<wrapContext.Provider value={something}>
					<ThemeTogglerButton />
				</wrapContext.Provider>
			</div>
		);
	}
}


import { h, createContext } from '../../preact';
import { useState, useCallback, useMemo, useEffect, useLayoutEffect, useRef, useContext, useReducer } from '../../preact/hooks';
// import { Button } from 'antd-mobile'
import './style.css';
import {Theme} from './ThemeContext'
// import { reduce } from 'core-js/fn/array';

// const Theme = createContext({});

const resucer = (state, {type , payload}) => {
	console.log(payload)
	switch (type) {
		case 'ADD':
			return {number : state.number + 1}
		case 'MINUS': 
			return {number: state.number - 1}
		default:
			return false
	}
}



const Home = (props) => {
	// debugger;
	const [status, setstatus] = useState(0);
	const [subStatus, setsunStatus] = useState('Hello');
	let [state, dispatch] = useReducer(resucer, {
		number: 0
	})
	let Ref = useRef(1000);
	let callback = useCallback(()=>{
		console.log('callback')
	})
	console.log(callback)
	const btn = () => {
		setstatus(status + 1)
	}
	const decrement = () => {
		setstatus(status - 1)
	}
	const update = () => {
		setsunStatus('Hello World')
	}
	useEffect(()=>{
		console.log(222)
		
	}, [])
	useLayoutEffect(()=>{
		// console.log(Ref);
		// function factorial(n) {
		// 	console.trace()
		// 	if (n === 1 || n === 0) { 
		// 		return 1
		// 	} 
		// 	return n * factorial(n - 1)
		// }
		
		// console.log(factorial(5));
	})
	return (
		<div class='home'>
			<h1 >Home</h1>
			<p>{status}</p>
			<button onClick={btn}>加号</button>
			<button onClick={decrement}>减号</button>
			<button onClick={update}>{subStatus}更新啦</button>
			<p>This is the Home component.</p>
			<Theme.Provider value={[state, dispatch]}>
				<Sun ref={Ref} mess={subStatus}/>
			</Theme.Provider>
			
			
		</div>
	)
};

const Sun = (props) => {
	let [state, dispatch] = useContext(Theme);
	console.log(state)
	return (
		<div>
			<span>{state.number}</span>
			<h2>{props.mess}我是子组件</h2>
			<button onClick={()=> dispatch({
				type: 'ADD',
				payload: 123
			})}> + </button>
			<button onClick={()=> dispatch({
				type: 'MINUS',
				payload: 321
			})}> - </button>
			<Childs />
		</div>
		
	)
}

const Childs = () => {
	return (
		
		<Theme.Consumer>
			{ ([state, dispatch]) => {
				console.log(state)
				return (
					<div>
						<span>{state.number}</span>
						<h2>我是孙子组件</h2>
						<button onClick={()=> dispatch({
							type: 'ADD',
							payload: 123
						})}> + </button>
						<button onClick={()=> dispatch({
							type: 'MINUS',
							payload: 321
						})}> - </button>
					</div>
				)
			} }
		</Theme.Consumer>
		
	)
}
const Child = (props) => {
	let [state, dispatch] = useContext(Theme);
	console.log(state)
	return (
		<div>
			<span>{state.number}</span>
			<h2>我是孙子组件</h2>
			<button onClick={()=> dispatch({
				type: 'ADD',
				payload: 123
			})}> + </button>
			<button onClick={()=> dispatch({
				type: 'MINUS',
				payload: 321
			})}> - </button>
		</div>
		
	)
}

export default Home;

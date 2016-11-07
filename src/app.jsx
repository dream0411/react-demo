import React from "react"
import ReactDOM from "react-dom"
import Hello from "./components/hello.jsx"

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <Hello/>
	}
}

ReactDOM.render(<App/>, document.getElementById("app"))

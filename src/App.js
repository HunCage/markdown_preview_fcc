import React, {useState} from "react";
import "./App.css";
import { Alert } from "bootstrap-4-react";
import { render } from "@testing-library/react";


let placeholder = `fuction Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
		return <GuestGreeting />;
	}
	
	ReatDOM.render(
		// Try changing to isLoggedIn={true}:
		<Greeting isLoggedIn={false} />,
		document.getElmentById('root')
	);`;
	
function App() {
	const [placeHolder, setPlaceHolder] = React.useState("")

	return (
		<div className="App w-100 m-auto">
			<header className="App-header mb-4">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					<code>Markdown Previewer</code>
				</p>
			</header>
			<main className="w-75 m-auto">
				<TextArea />
				<Preview markdown={placeHolder}/>
			</main>
		</div>
	);

	function TextArea() {
		return (
			<div className="m-auto card w-75 h-100">
				<div className="card-header">
					<h6 className="text-left font-weight-bold">EDITOR</h6>
				</div>
				<div className="card-body w-100 m-0 p-0">
					<textarea 
						id="editor" 
						className="w-100 m-0 p-0 Tarea"
						value={placeholder}
					></textarea>
				</div>
				<div className="card-footer"></div>
			</div>
		);
	}

	function Preview({markdown}) {
		return (
			<div className="w-100 mt-4 z-index-1000">
				<div className="card-header">
					<h6 className="text-left font-weight-bold">PREVIEWER</h6>
				</div>
				<div id="preview" className="card-body w-100">
					<code>{markdown}</code>
				</div>
				<div className="card-footer"></div>
			</div>
		);
	}
}

export default App;

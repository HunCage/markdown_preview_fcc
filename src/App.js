import React, { useState } from "react";
import "./App.css";
import bootstrap from "bootstrap-4-react";
import marked from "marked";
import Prism from "prismjs";

marked.setOptions({
	breaks: true,
	highlight: function (code) {
		return Prism.highlight(code, Prism.languages.javascript, "javascript");
	},
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
	return `<a target="_blank" href="${href}">${text}</a>`;
};

const TextArea = ({ text, handleChange }) => {
	return (
		<div className="m-auto card w-75 editorCard">
			<div className="card-header bg-primary">
				<h6 className="text-left font-weight-bold">EDITOR</h6>
			</div>
			<div className="card-body w-100 mb-0 p-0">
				<textarea
					id="editor"
					className="w-100 m-0 p-2 Tarea textarea"
					value={text}
					onChange={handleChange}
				></textarea>
			</div>
			<div className="card-footer bg-primary mt-0"></div>
		</div>
	);
};

const Preview = ({ text }) => {
	return (
		<div className="w-100 mt-4 previewCard border rounded">
			<div className="card-header bg-success">
				<h6 className="text-left font-weight-bold">PREVIEWER</h6>
			</div>
			<div
				id="preview"
				className="card-body w-100 bg-light text-left"
				dangerouslySetInnerHTML={{
					__html: marked(text, { renderer: renderer }),
				}}
			>
			</div>
			<div className="card-footer bg-success"></div>
		</div>
	);
};

const App = () => {
	const [text, setText] = useState(placeholder);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="App w-100 m-auto">
			<header className="App-header mb-4">
				<p>
					<code>Markdown Previewer</code>
				</p>
			</header>
			<main className="w-75 m-auto">
				<TextArea text={text} handleChange={handleChange} />
				<Preview text={text} />
			</main>
		</div>
	);
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;

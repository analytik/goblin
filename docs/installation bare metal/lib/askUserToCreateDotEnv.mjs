import fs from "node:fs";
const tk = require('terminal-kit');
async function askUserToCreateDotEnv(state, document) {
	const textb1 = new tk.TextBox({
		parent: document,
		scrollable: true,
		hasHScrollBar: true,
		width: 60,
		height: 15,
		x: 20,
		y: 5,
		wordWrap: true,
	});
	const readme = `Hi!
	Seems like you don't have a .env file ready yet
	if you want to make one yourself, Ctrl-C out of here.
	Otherwise, follow our easy step by step instructions!
	Or die trying.
	`
	textb1.appendContent(readme);
}

export default askUserToCreateDotEnv

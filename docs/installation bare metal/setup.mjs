#!/usr/bin/env ./node_modules/.bin/zx
import 'zx/globals';
const termkit = require('terminal-kit');
import checkBasicFiles from './lib/checkBasicFiles.mjs';
import askUserToCreateDotEnv from './lib/askUserToCreateDotEnv.mjs';
import {delay, state} from './lib/utils.mjs';

const term = termkit.terminal;
const document = term.createDocument({
	palette: new termkit.Palette(),
	backgroundAttr: {bgColor: 'black', dim: true},
});
term.fullscreen(true);
// const myPwd = await $`pwd`.quiet();

const spinner = await term.spinner('unboxing-color');
term(' === Loading 3D models... === \n\n');
await checkBasicFiles(state);

if (!state.files.dotEnv.exists) {
	await askUserToCreateDotEnv(state, document);
}
// TODO check if .env exists
// if no, create it from user input
// --- server name, IP address, private key location
// if yes, check if ~/.ssh/config has an entry for the server name
// if no

await delay(3000);
// term.clear();

// This output 'red' in red
// term.red('red');
//
// // This output 'bold' in bold
// term.bold('bold');
//
// // output 'mixed' using bold, underlined & red, exposing the style-mixing syntax
// term.bold.underline.red('mixed');
//
// // printf() style formatting everywhere:
// // this will output 'My name is Jack, I'm 32.' in green
// term.green("My name is %s, I'm %d.\n", 'Jack', 32);
//
// // Since v0.16.x, style markup are supported as a shorthand.
// // Those two lines produce the same result.
// term("My name is ").red("Jack")(" and I'm ").green("32\n");
// term("My name is ^rJack^ and I'm ^g32\n");
//
// // Width and height of the terminal
// term('The terminal size is %dx%d', term.width, term.height);
// console.log('');

// Move the cursor at the upper-left corner
// term.moveTo(1, 1);

// We can always pass additional arguments that will be displayed...
// term.moveTo(1, 1, 'Upper-left corner');

// ... and formated
// term.moveTo(1, 1, "My name is %s, I'm %d.\n", 'Jack', 32);

// ... or even combined with other styles
// term.moveTo.cyan(1, 1, "My name is %s, I'm %d.\n", 'Jack', 32);

// Get some user input
// term.magenta("Enter your name: ");
// term.inputField(
// 	async function (error, input) {
// 		term.green("\nYour name is '%s'\n", input);
// 		quitSetup();
// 	}
// );

quitSetup();

function quitSetup() {
	// All's well that ends well
	console.log('Goodbye');
	// A good idea might be to clear the previous screen clutter
	// document.
	// term.clear()
	// term.fullscreen(false);
	// And output the status of what's been done / log of changes
	term.processExit(0);
}



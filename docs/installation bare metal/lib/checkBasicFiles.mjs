import fs from "node:fs";

async function checkBasicFiles(state) {
	for (let file in state.files) {
		try {
			fs.accessSync(state.files[file].path, fs.constants.F_OK);
			state.files[file].exists = true;
			console.log('exists ' + file);
		}
		catch {
			state.files[file].exists;
			console.log('exists NOT ' + file);
		}
	}
}

export default checkBasicFiles

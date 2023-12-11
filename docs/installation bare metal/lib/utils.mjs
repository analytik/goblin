export const state = {
	DEBUG: true,
	files: {
		sshConfig: {
			exists: false,
			correct: false,
			path: '~/.ssh/config',
		},
		dotEnv: {
			exists: false,
			correct: false,
			path: './.env',
		},
		packaajTest: {
			exists: false,
			correct: false,
			path: './package.json',
		},
		knownHostsTest: {
			exists: false,
			correct: false,
			path: '~/.ssh/known_hosts',
		},
	},
};

export async function delay(delayMs) {
	return new Promise((resolve => {
		setTimeout(() => {
			resolve();
		}, delayMs);
	}));
}

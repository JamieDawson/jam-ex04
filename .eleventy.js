module.exports = function (config) {
	config.addPassthroughCopy('src/js');
	return {
		dir: {
			input: 'src',
			output: 'dist',
			data: '_data',
		},
	};
};

/*
The input int he src folder.
The output int he dist folder which eleventy will create

*/

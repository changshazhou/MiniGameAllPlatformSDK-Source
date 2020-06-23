const gulp = require("gulp");
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');//typescript2 plugin
const glsl = require('rollup-plugin-glsl');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

const terser = require("rollup-plugin-terser");
const uglify = require("rollup-plugin-uglify");
const typedoc = require('gulp-typedoc')
const browserSync = require('browser-sync').create()

gulp.task('tsc', () => {
	return rollup.rollup({
		input: './platform/moosnowEntry.ts',
		onwarn: (waring, warn) => {
			if (waring.code == "CIRCULAR_DEPENDENCY") {
				console.log("warnning Circular dependency:");
				console.log(waring);
			}
		},
		treeshake: false, //建议忽略
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				check: true, //Set to false to avoid doing any diagnostic checks on the code
				tsconfigOverride: { compilerOptions: { removeComments: false } },
				include: /.*.ts/,
			}),
			glsl({
				// By default, everything gets included
				include: /.*(.glsl|.vs|.fs)$/,
				sourceMap: false,
				compress: false
			}),
			// terser.terser(),
			uglify.uglify(),
			/*terser({
				output: {
				},
				numWorkers:1,//Amount of workers to spawn. Defaults to the number of CPUs minus 1
				sourcemap: false
			})*/
		]
	}).then(bundle => {
		return bundle.write({
			file: './dist/moosnow.platform.sdk.js',
			format: 'iife',
			name: 'mx',
			sourcemap: false
		});
	}).catch(err => {
		console.log(err);

	})
});
gulp.task('ui', () => {
	return rollup.rollup({
		input: './platform/moosnowUI.ts',
		onwarn: (waring, warn) => {
			if (waring.code == "CIRCULAR_DEPENDENCY") {
				console.log("warnning Circular dependency:");
				console.log(waring);
			}
		},
		treeshake: false, //建议忽略
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				check: true, //Set to false to avoid doing any diagnostic checks on the code
				tsconfigOverride: { compilerOptions: { removeComments: false } },
				include: /.*.ts/,
			}),
			glsl({
				// By default, everything gets included
				include: /.*(.glsl|.vs|.fs)$/,
				sourceMap: false,
				compress: false
			}),
			// terser.terser(),
			uglify.uglify(),
			/*terser({
				output: {
				},
				numWorkers:1,//Amount of workers to spawn. Defaults to the number of CPUs minus 1
				sourcemap: false
			})*/
		]
	}).then(bundle => {
		return bundle.write({
			file: './dist/moosnow.platform.ui.js',
			format: 'iife',
			name: 'mx',
			sourcemap: false
		});
	}).catch(err => {
		console.log(err);

	})
});

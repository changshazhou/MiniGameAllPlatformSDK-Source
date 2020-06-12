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
			// uglify.uglify(),
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

// const runTypeDoc = () => gulp
// 	.src(['platform'])
// 	.pipe(typedoc({
// 		out: './docs',
// 		// 这个文件里都是 export * from '...' 就没必要导出文档了
// 		input: './platform/Main.ts',
// 		tsconfig: 'tsconfig.json',
// 	}))

// const reload = (done) => {
// 	browserSync.reload()
// 	done()
// }

// const runBrowserSync = (done) => {
// 	browserSync.init({
// 		server: {
// 			baseDir: './docs',
// 		},
// 	})
// 	done()
// }
// const watch = () => gulp.watch(
// 	['README.md', 'src/*.ts'],
// 	gulp.series(runTypeDoc, reload)
// )

// gulp.task('default', gulp.series(runTypeDoc, runBrowserSync, watch))



// var ts = require('gulp-typescript');
// var merge = require('merge2');  // Require separate installation
// gulp.task('release', function () {
// 	var tsResult = gulp.src('dist/**/*.ts')
// 		.pipe(ts({
// 			declaration: true,
// 			noResolve: true
// 		}));

// 	return merge([
// 		tsResult.dts.pipe(gulp.dest('release/definitions')),
// 		tsResult.js.pipe(gulp.dest('release/js'))
// 	]);
// });
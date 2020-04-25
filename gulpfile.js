const gulp = require("gulp");
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');//typescript2 plugin
const glsl = require('rollup-plugin-glsl');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

const terser = require("rollup-plugin-terser");
const uglify = require("rollup-plugin-uglify");

gulp.task('tsc', () => {
	return rollup.rollup({
		input: './platform/Main.ts',
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
				tsconfigOverride: { compilerOptions: { removeComments: true } },
				include: /.*.ts/,
			}),
			glsl({
				// By default, everything gets included
				include: /.*(.glsl|.vs|.fs)$/,
				sourceMap: false,
				compress: false
			}),
			uglify.uglify(),
			// terser.terser()
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
			name: 'laya',
			sourcemap: false
		});
	}).catch(err => {
		console.log(err);

	})
});

// 压缩js
// gulp.task("compressJs", ["tsc"], function () {
// 	if (config.compressJs) {
// 		return gulp.src(['!b*.js', '*.js'], { base: './dist/' })
// 			.pipe(uglify({
// 				mangle: {
// 					keep_fnames: true
// 				}
// 			}))
// 			.on('error', function (err) {
// 				console.warn(err.toString());
// 			})
// 			.pipe(gulp.dest(releaseDir));
// 	}
// });


// gulp.task('build', function () {
// 	gulp.src('dist/*.js')       // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
// 		.pipe(concat('all.sdk.js'))   //合并成的js文件名称
// 		.pipe(uglify())            //压缩
// 		.pipe(gulp.dest('build'));    //打包压缩在build目录下。
// });

// gulp.task('dist', ['tsc'], () => {
//     gulp.watch('./ts/**/*.ts', ['tsc']);
// })
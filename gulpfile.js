const gulp = require("gulp");
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');//typescript2 plugin
const glsl = require('rollup-plugin-glsl');

gulp.task('tsc', () => {
    return rollup.rollup({
		input: './platform/Main.ts',
		onwarn:(waring,warn)=>{
			if(waring.code == "CIRCULAR_DEPENDENCY"){
				console.log("warnning Circular dependency:");
				console.log(waring);
			}
		},
		treeshake: false, //建议忽略
		plugins: [
			typescript({
				tsconfig:"./tsconfig.json",
				check: true, //Set to false to avoid doing any diagnostic checks on the code
				tsconfigOverride:{compilerOptions:{removeComments: true}},
				include:/.*.ts/,
			}),
			glsl({
				// By default, everything gets included
				include: /.*(.glsl|.vs|.fs)$/,
				sourceMap: false,
				compress:false
			}),
			/*terser({
				output: {
				},
				numWorkers:1,//Amount of workers to spawn. Defaults to the number of CPUs minus 1
				sourcemap: false
			})*/        
		]
	}).then(bundle => {
		return bundle.write({
			file: '../../dist/platformSdk.js',
			format: 'iife',
			name: 'laya',
			sourcemap: false
		});
	}).catch(err=>{
			console.log(err);
		
	})
});

// gulp.task('dist', ['tsc'], () => {
//     gulp.watch('./ts/**/*.ts', ['tsc']);
// })
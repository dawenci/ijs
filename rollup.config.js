import typescript from 'rollup-plugin-typescript2'
import nodeResolvePlugin from 'rollup-plugin-node-resolve'
import commonJSPlugin from 'rollup-plugin-commonjs'
const pkg = require('./package.json')
export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.browser,
      format: 'iife',
      name: 'I',
      sourcemap: false
    }
  ],
  plugins: [
    nodeResolvePlugin({ browser: true }),
    commonJSPlugin(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          allowSyntheticDefaultImports: true,
          experimentalDecorators: true,
          downlevelIteration: true,
          lib: [ 'dom', 'scripthost', 'es5', 'es2015.promise' ]
        }
      }
    })
  ]
}

/* globals process */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';

const plugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  clear({ targets: ['dist'] }),
  babel(),
  terser()
 ];


export default {
  input: './index.js',
  output: {
    dir: 'dist'
  },
  plugins,
};

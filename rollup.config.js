import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

const external = [...Object.keys(packageJson.peerDependencies || {})];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: ['lib/*'] }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
      extract: true,
    }),
    copy({
      targets: [
        { src: 'src/static/fonts/**/*', dest: 'lib/static/fonts' },
        { src: 'node_modules/react-quill/dist/*', dest: 'lib/static/css' },
      ],
    }),
  ],
  external,
};

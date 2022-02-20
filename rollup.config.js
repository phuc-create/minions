import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
// import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
// import autoprefixer from 'autoprefixer'
// import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJSON = require('./package.json')

export default [
  {
    input:'src/index.tsx',
    output:[
      {
        file:packageJSON.main,
        format:'cjs',
        sourcemap:true
      },
      {
        file:packageJSON.module,
        format:'esm',
        sourcemap:true
      }
    ],
    plugins:[
      resolve(),
      peerDepsExternal(),
      typescript({tsconfig:'./tsconfig.json'}),
      commonjs(),
      postcss({
        modules: false,
        extract: false,
        use: ['sass'],
      }),
      // babel({ exclude: 'node_modules/**' })
    ]
  },
  {
    input:'dist/esm/types/index.d.ts',
    output:[{file:'dist/index.d.ts',format:'esm'}],
    plugins:[dts()],
    external:[/\.(s?)css$/,'react', 'react-dom']
  }
]

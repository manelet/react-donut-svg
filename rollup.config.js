import typescript from "rollup-plugin-typescript2"
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

export default {
  input: './src/index.tsx',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'default',
      globals: {
        react: 'React',
        'styled-components': 'styled'
      }      
    },
    {
      file: './dist/index_es.js',
      format: 'es',
      globals: {
        react: 'React',
        'styled-components': 'styled'
      }      
    },
    {
      file: './dist/index_umd.js',
      format: 'umd',
      name: 'ReactDonut',
      globals: {
        react: 'React',
        'styled-components': 'styled'
      }
    }
  ],
  external: ['react', 'styled-components'],
  plugins: [
    commonjs(),
    typescript(),
    postcss({
      inject: true
      // extract: true,
      // extract: path.resolve('./dist/styles.css')
    }),
    copy({
      targets: [
        {
          src: './package.json',
          dest: './dist'
        },
        // {
        //   src: './src/styles.css',
        //   dest: './dist'
        // }
      ]
    })
  ]
}
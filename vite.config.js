const path = require('path')
import glob from 'glob';
import {fileURLToPath} from 'url'

export default {
  root: path.resolve(__dirname, 'src'),
  base: "/",
  build: {
    outDir: path.join(__dirname, "src/dist"),
    rollupOptions: {
      input: Object.fromEntries(
          glob.sync('src/**/*.html').map(file => [
            path.relative(
                'src',
                file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url))
          ]),
      )
    },
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8081,
    hot: true
  }
}

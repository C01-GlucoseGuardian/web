const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: "/web/",
  build: {
    outDir: path.join(__dirname, "src/dist"),
    rollupOptions: {
      input: {
        main:  path.resolve(__dirname, 'src/index.html'),
        error: path.resolve(__dirname, 'src/error/genericerror.html'),
        login: path.resolve(__dirname, 'src/login/login.html'),
        loginAdmin: path.resolve(__dirname, 'src/login/contactanadmin.html'),
        newprofilopaziente: path.resolve(__dirname, 'src/creazioneprofili/newprofilopaziente.html'),
        newtutore: path.resolve(__dirname, 'src/creazioneprofili/newtutore.html'),
        temp: path.resolve(__dirname, 'src/creazioneprofili/temp.html'),
        patientlist: path.resolve(__dirname, 'src/dataview/patientslist.html'),
        signup: path.resolve(__dirname, 'src/signup/signup.html'),
      },
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

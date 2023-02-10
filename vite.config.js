const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: "/",
  build: {
    outDir: path.join(__dirname, "src/dist"),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        error: path.resolve(__dirname, 'src/error/genericerror.html'),
        login: path.resolve(__dirname, 'src/login/login.html'),
        loginAdmin: path.resolve(__dirname, 'src/login/contactanadmin.html'),
        admin: path.resolve(__dirname, 'src/admin/convalidation.html'),
        newprofilopaziente: path.resolve(__dirname,
            'src/creazioneprofili/newpaziente.html'),
        newtutore: path.resolve(__dirname,
            'src/creazioneprofili/newtutore.html'),
        dati: path.resolve(__dirname, 'src/dataview/dati.html'),
        patientlist: path.resolve(__dirname, 'src/dataview/patientslist.html'),
        signup: path.resolve(__dirname, 'src/signup/signup.html'),
        dashboard: path.resolve(__dirname, 'src/dataview/dashboard.html'),
        agenda: path.resolve(__dirname, 'src/dataview/agenda.html'),
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

const mysql = require('mysql')
this.connection = mysql.createConnection({
        host: '35.196.173.240',
        port: '3306',
        user: 'root',
        password: '251410',
        database: 'master'
})

var config = {
	database: {
		host:	  '<yourrdsfqdn>', 	// database host
		user: 	  'admin', 		// your database username
		password: 'admin', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'test' 		// your database name
	},
	server: {
		host: '0.0.0.0',
		port: '3000'
	}
}

module.exports = config

var config = {
	database: {
		host:	  'mysqldatabase.cb1ujprwezfc.us-east-1.rds.amazonaws.com', 	// database host
		user: 	  'foo', 		// your database username
		password: 'foobarbaz', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'mydb' 		// your database name
	},
	server: {
		host: '0.0.0.0',
		port: '3000'
	}
}

module.exports = config

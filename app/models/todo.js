var mongoose = require('mongoose');

//defining database schema
module.exports = mongoose.model('Todo', {            
	text : String,
	done : Boolean
});
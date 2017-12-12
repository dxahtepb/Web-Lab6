var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  text: {
    type: String
  }
},{
	collection: 'markdown_files2'
});

module.exports = mongoose.model('Item', Item);
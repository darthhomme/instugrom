// ----------------------
// ****** Modules! ******
// ----------------------
var mongoose = require('mongoose');

// ----------------------
// ****** Schemas! ******
// ----------------------



// ~~~ Haiku! ~~~
var PhotoSchema = mongoose.Schema({
  title: {type: String},
  date: {type: String}
});



// ----------------------
// ****** Exports! ******
// ----------------------

module.exports = mongoose.model('Photo', PhotoSchema);

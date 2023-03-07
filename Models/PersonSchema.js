
const mongoose = require('mongoose')



const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person




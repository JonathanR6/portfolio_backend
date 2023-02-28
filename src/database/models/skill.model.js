const { Schema, model } = require('mongoose');

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name property is required'],
    unique: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
});

const SkillModel = model('Skills', SkillSchema);

module.exports = SkillModel;

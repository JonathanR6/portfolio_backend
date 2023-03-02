const { Schema, model } = require('mongoose');

const projectSchema = Schema({
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

const ProjectModel = model('Projects', projectSchema);

module.exports = ProjectModel;

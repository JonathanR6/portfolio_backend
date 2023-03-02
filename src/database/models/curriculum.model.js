const { Schema, model } = require('mongoose');

const curriculumSchema = Schema({
  mimetype: {
    type: String,
    validate: {
      validator: (value) => value === 'application/pdf',
      message: 'the file is not valid',
    },
  },
  fileBuffer: {
    type: Buffer,
  },
});

const CurriculumModel = model('Curriculum', curriculumSchema);

module.exports = CurriculumModel;

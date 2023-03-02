const { Schema, model } = require('mongoose');

const fileSchema = Schema({
  nameFile: {
    type: String,
    required: [true, 'nameFile property is required'],
    unique: true,
  },
  mimetype: {
    type: String,
    required: [true, 'mimetype property is required'],
  },
  fileBuffer: Buffer,
});

const FileModel = model('Files', fileSchema);

module.exports = FileModel;

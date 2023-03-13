const { Schema, model } = require('mongoose');
const FileModel = require('./file.model');
const { HOST_URL } = require('../../config/environment');

const projectSchema = Schema({
  name: {
    type: String,
    required: [true, 'name property is required'],
    unique: true,
  },
  iconId: {
    type: Schema.Types.ObjectId,
    ref: 'Files',
    require: [true, 'iconId property is required'],
  },
  iconUrl: {
    type: String,
    require: [true, 'iconUrl property is required'],
    set: (v) => `${HOST_URL}/api/storage/file?item=${v}`,
  },
  deployUrl: {
    type: String,
    require: [true, 'deployUrl property is required'],
  },
  repositoryUrl: {
    type: String,
    require: [true, 'repositoryUrl property is required'],
  },
});

async function removeFile(next) {
  await FileModel.findByIdAndRemove(this.iconId);
  next();
}

projectSchema.pre('remove', removeFile);

const ProjectModel = model('Projects', projectSchema);

module.exports = ProjectModel;

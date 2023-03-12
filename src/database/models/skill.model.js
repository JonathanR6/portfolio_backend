const { Schema, model } = require('mongoose');
const FileModel = require('./file.model');
const { HOST_URL } = require('../../config/environment');

const SkillSchema = new Schema({
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
});

async function removeFile(next) {
  await FileModel.findByIdAndRemove(this.iconId);
  next();
}

SkillSchema.pre('remove', removeFile);

const SkillModel = model('Skills', SkillSchema);

module.exports = SkillModel;

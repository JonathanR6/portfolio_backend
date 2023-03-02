const FileModel = require('../database/models/file.model');

module.exports = {
  saveFile: ({ nameFile, mimetype, fileBuffer }) => FileModel.create({
    nameFile,
    mimetype,
    fileBuffer,
  }),
  getFileById: (id) => FileModel.findById(id),
};

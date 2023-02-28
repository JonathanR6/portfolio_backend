const skillService = require('../../services/skills.service');
const fileService = require('../../services/files.service');
const { HOST_URL } = require('../../config/environment');

module.exports = {
  addSkill: async (req, res) => {
    const { nameSkill, nameFile } = req.body;
    const { file } = req.files;

    const testFile = await fileService.saveFile({
      nameFile,
      mimetype: file.mimetype,
      fileBuffer: file.data,
    });

    if (!testFile) throw Error('error file');

    const { _id: id } = testFile;

    const skill = await skillService.saveSkill({
      nameSkill,
      iconUrl: `${HOST_URL}/api/storage/file?id=${id}`,
    });

    res.status(201).json(skill);
  },
};

const skillService = require('../../services/skills.service');
const fileService = require('../../services/files.service');

module.exports = {
  addSkill: async (req, res) => {
    const { nameSkill, nameFile } = req.body;
    const { file } = req.files;

    const fileCreated = await fileService.saveFile({
      nameFile,
      mimetype: file.mimetype,
      fileBuffer: file.data,
    });

    if (!fileCreated) throw Error('error file');

    const { _id: id } = fileCreated;

    const skill = await skillService.saveSkill({
      nameSkill,
      id,
    });

    res.status(201).json(skill);
  },
  getAllSkills: async (req, res) => {
    const skills = await skillService.getSkills();

    res.status(200).json(skills);
  },
  removeSkill: async (req, res) => {
    const { item } = req.query;

    const removedSkill = await skillService.deleteSkill(item);

    res.status(200).json(removedSkill);
  },
};

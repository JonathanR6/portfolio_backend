const projectService = require('../../services/projects.service');
const fileService = require('../../services/files.service');
const { HOST_URL } = require('../../config/environment');

module.exports = {
  addProject: async (req, res) => {
    const { nameProject, nameFile } = req.body;
    const { file } = req.files;

    const testFile = await fileService.saveFile({
      nameFile,
      mimetype: file.mimetype,
      fileBuffer: file.data,
    });

    if (!testFile) throw Error('error file');

    const { _id: id } = testFile;

    const skill = await projectService.saveProject({
      nameProject,
      iconUrl: `${HOST_URL}/api/storage/file?item=${id}`,
    });

    res.status(201).json(skill);
  },
  getAllPorjects: async (req, res) => {
    const projects = await projectService.getProjects();

    res.status(200).json(projects);
  },
};

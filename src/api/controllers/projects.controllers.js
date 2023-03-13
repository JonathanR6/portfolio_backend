const projectService = require('../../services/projects.service');
const fileService = require('../../services/files.service');

module.exports = {
  addProject: async (req, res) => {
    const {
      nameProject, nameFile, deployUrl, repositoryUrl,
    } = req.body;

    const { file } = req.files;

    const fileCreated = await fileService.saveFile({
      nameFile,
      mimetype: file.mimetype,
      fileBuffer: file.data,
    });

    if (!fileCreated) throw Error('error file');

    const { _id: id } = fileCreated;

    const skill = await projectService.saveProject({
      nameProject,
      id,
      deployUrl,
      repositoryUrl,
    });

    res.status(201).json(skill);
  },
  getAllPorjects: async (req, res) => {
    const projects = await projectService.getProjects();

    res.status(200).json(projects);
  },
  removeProject: async (req, res) => {
    const { item } = req.query;

    const removedProject = await projectService.deleteProject(item);

    res.status(200).json(removedProject);
  },
};

const ProjectModel = require('../database/models/project.model');

module.exports = {
  saveProject: ({
    nameProject, id, deployUrl, repositoryUrl,
  }) => ProjectModel.create({
    name: nameProject,
    iconId: id,
    iconUrl: id,
    deployUrl,
    repositoryUrl,
  }),
  getProjects: () => ProjectModel.find({}, { iconId: 0 }),
  deleteProject: async (id) => {
    const project = await ProjectModel.findById(id);
    const removedProject = await project.remove();

    return removedProject;
  },
};

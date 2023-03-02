const ProjectModel = require('../database/models/project.model');

module.exports = {
  saveProject: ({ nameProject, iconUrl }) => ProjectModel.create({
    name: nameProject,
    iconUrl,
  }),
  getProjects: () => ProjectModel.find({}),
};

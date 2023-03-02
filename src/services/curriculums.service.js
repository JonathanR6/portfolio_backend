const CurriculumModel = require('../database/models/curriculum.model');

module.exports = {
  saveCurriculum: ({ mimetype, fileBuffer }) => CurriculumModel.create({
    mimetype,
    fileBuffer,
  }),
  getCurriculums: () => CurriculumModel.find({}),
  getCurriculumById: (id) => CurriculumModel.findById(id),
};

const curriculumService = require('../../services/curriculums.service');

module.exports = {
  addCurriculum: async (req, res) => {
    const { file } = req.files;

    const curriculum = await curriculumService.saveCurriculum({
      mimetype: file.mimetype,
      fileBuffer: file.data,
    });

    res.status(201).json(curriculum);
  },
  getCurriculums: async (req, res) => {
    const { item } = req.query;

    if (item !== 'all') {
      const curriculum = await curriculumService.getCurriculumById(item);

      res.set('Content-Type', curriculum.mimetype);
      return res.status(201).send(curriculum.fileBuffer);
    }

    const curriculums = await curriculumService.getCurriculums();

    return res.status(201).json(curriculums);
  },
  removeCurriculum: async (req, res) => {
    const { item } = req.query;
    const removedCurriculum = await curriculumService.deleteProject(item);

    res.status(200).json(removedCurriculum);
  },
};

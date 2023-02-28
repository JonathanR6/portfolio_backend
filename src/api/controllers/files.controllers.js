const { getFileById } = require('../../services/files.service');

module.exports = {
  getFile: async (req, res) => {
    const { item } = req.query;

    const { mimetype, fileBuffer } = await getFileById(item);

    res.set('Content-Type', mimetype);
    res.send(fileBuffer);
  },
};

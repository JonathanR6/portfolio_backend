const SkillModel = require('../database/models/skill.model');

module.exports = {
  saveSkill: async ({ nameSkill, id }) => SkillModel.create({
    name: nameSkill,
    iconId: id,
    iconUrl: id,
  }),
  getSkills: () => SkillModel.find({}, { iconId: 0 }),
  deleteSkill: async (id) => {
    const skill = await SkillModel.findById(id);
    const removedSkill = await skill.remove();

    return removedSkill;
  },
};

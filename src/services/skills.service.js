const SkillModel = require('../database/models/skill.model');

module.exports = {
  saveSkill: ({ nameSkill, iconUrl }) => SkillModel.create({
    name: nameSkill,
    iconUrl,
  }),
};

const skills = [
    {id: 125223, skill: 'procrastinating'},
    {id: 127904, skill: 'critical thinking'},
    {id: 139608, skill: 'copy + paste'}
  ];


  module.exports = {
    getAll,
    create,
    getOne,
    deleteOne
  }

  function deleteOne(id) {
    id = parseInt(id);
    const skillIdx = skills.findIndex((s) => s.id === id);
    skills.splice(skillIdx, 1);
  }

  function getOne(id) {
    id = parseInt(id);
    const skill = skills.find(s => s.id == id);
    return skill;
  }

function create(skill) {
  skill.id = Date.now() % 100000;
  skills.push(skill);
}

  function getAll() {
    return skills;
  }


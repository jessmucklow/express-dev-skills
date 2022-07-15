const skills = [
    {id: 125223, skill: 'procrastinating'},
    {id: 127904, skill: 'critical thinking'},
    {id: 139608, skill: 'copy + paste'}
  ];


  module.exports = {
    getAll,
    create,
    getOne,
  }

  function getOne(id) {
    const skill = skills.find(s => s.id == id)
    return skill
  }

function create(skill) {
  skill.id = Date.now() % 100000
  skills.push(skill)
}

  function getAll() {
    return skills 
  }


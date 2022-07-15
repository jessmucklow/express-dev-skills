const Skill = require('../models/skill')

module.exports = {
    index,
    new: newSkill,
    create,
    show,
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show', {skill})
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    const skills = Skill.getAll()
    res.render('skills/index', {skills, title: "Skills"})
}
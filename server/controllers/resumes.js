const Resume = require('../models').Resume;
const Job = require('../models').Job;

module.exports = {
  create(req, res) {
    return Resume
      .create({
        name: req.body.name,
        profileImage: req.body.profileImage,
        bannerImage: req.body.bannerImage,
        title: req.body.title,
        education: req.body.education,
        location: req.body.location,
        summary: req.body.summary,
        bannerImage2: req.body.bannerImage2,
      })
      .then(resume => res.status(201).send(resume))
      .catch(error => res.status(400).send(error));


  },

  list(req, res) {
    return Resume
      .findAll({
        include: [{
          model: Job,
          as: 'jobs',
        }],
      })
      .then(resumes => res.status(200).send(resumes))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Resume
      .findById(req.params.resumeId, {
        include: [{
          model: Job,
          as: 'jobs',
        }],
      })
      .then(resume => {
        if (!resume) {
          return res.status(404).send({
            message: 'Resume Not Found',
          });
        }
        return res.status(200).send(resume);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Resume
      .findById(req.params.resumeId, {
        include: [{
          model: Job,
          as: 'jobs',
        }],
      })
      .then(resume => {
        if (!resume) {
          return res.status(404).send({
            message: 'Resume Not Found',
          });
        }
        return resume
          // .update({
          //   title: req.body.title || todo.title,
          // })
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(resume))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Resume
      .findById(req.params.resumeId)
      .then(resume => {
        if (!resume) {
          return res.status(400).send({
            message: 'Resume Not Found',
          });
        }
        return resume
        .destroy()
        .then(() => res.status(200).send({ message: 'Resume deleted successfully.' }))
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));


  },
  
};


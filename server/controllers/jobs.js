const Job = require('../models').Job;

module.exports = {
  create(req, res) {
    return Job
      .create({
        title: req.body.title,
        company: req.body.company,
        period: req.body.period,
        industry: req.body.industry,
        location: req.body.location,
        description: req.body.description,
        current: req.body.current,

        resumeId: req.params.resumeId,
      })
      .then(job => res.status(201).send(job))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Job
      .find({
          where: {
            id: req.params.jobId,
            resumeId: req.params.resumeId,
          },
        })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
  
        return job
          // .update({
          //   content: req.body.content || todoItem.content,
          //   complete: req.body.complete || todoItem.complete,
          // })
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedJob => res.status(200).send(updatedJob))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Job
      .find({
          where: {
            id: req.params.jobId,
            resumeId: req.params.resumeId,
          },
        })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
  
        return job
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
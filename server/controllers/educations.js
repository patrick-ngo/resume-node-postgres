const Education = require('../models').Education;

module.exports = {

  //create an education for a resume by id
  create(req, res) {
    return Education
      .create({

        //basic info
        title: req.body.title,
        school: req.body.school,
        start: req.body.start,
        end: req.body.end,
        period: req.body.period,
        degree: req.body.degree,
        location: req.body.location,
        description: req.body.description,
        current: req.body.current,

        //image
        imageUrl: req.body.imageUrl,

        resumeId: req.params.resumeId,
      })
      .then(education => res.status(201).send(education))
      .catch(error => res.status(400).send(error));
  },

  //update a education by for a resume id
  update(req, res) {
    return Education
      .find({
          where: {
            id: req.params.educationId,
            resumeId: req.params.resumeId,
          },
        })
      .then(education => {
        if (!education) {
          return res.status(404).send({
            message: 'education Not Found',
          });
        }
  
        return education
          .update(req.body, { fields: Object.keys(req.body) })

          .then(updatedEducation => res.status(200).send(updatedEducation))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  //delete a education by id for a resume id
  destroy(req, res) {
    return Education
      .find({
          where: {
            id: req.params.educationId,
            resumeId: req.params.resumeId,
          },
        })
      .then(education => {
        if (!education) {
          return res.status(404).send({
            message: 'Education Not Found',
          });
        }
  
        return education
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
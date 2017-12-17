const Resume = require('../models').Resume;
const Job = require('../models').Job;
const Education = require('../models').Education;

module.exports = {

  //create a resume
  create(req, res) {
    return Resume
      .create({

        //basic info
        name: req.body.name,
        title: req.body.title,
        education: req.body.education,
        location: req.body.location,
        summary: req.body.summary,

        //images
        profileImage: req.body.profileImage,
        bannerImage: req.body.bannerImage,

        //contact info
        contactSummary: req.body.contactSummary,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        
      })
      .then(resume => res.status(201).send(resume))
      .catch(error => res.status(400).send(error));
  },

  //list all resumes
  list(req, res) {
    return Resume
      .findAll({
          include: [
          {
            model: Job,
            as: 'jobs',
          },
          {
            model: Education,
            as: 'educations',
          }
        ],
      })
      .then(resumes => res.status(200).send(resumes))
      .catch(error => res.status(400).send(error));
  },

  //get a resume by id
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

  //update a resume by id
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
          .update(req.body, { fields: Object.keys(req.body) })

          .then(() => res.status(200).send(resume))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  //delete a resume by id
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


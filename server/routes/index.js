const resumesController = require('../controllers').resumes;
const jobsController = require('../controllers').jobs;
const educationsController = require('../controllers').educations;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome te Patrick Ngo Resume API!',
    }));

    //create a resume
    app.post('/api/resumes', resumesController.create);
    //list all resumes
    app.get('/api/resumes', resumesController.list);
    //update a resume by id
    app.put('/api/resumes/:resumeId', resumesController.update);
    //get resume by id
    app.get('/api/resumes/:resumeId', resumesController.retrieve);
    //delete a resume by id
    app.delete('/api/resumes/:resumeId', resumesController.destroy);
    
    //create a job for resume id
    app.post('/api/resumes/:resumeId/jobs', jobsController.create);
    //update a job for a resume by job id and resume id
    app.put('/api/resumes/:resumeId/jobs/:jobId', jobsController.update);
    //delete a job for a reusume by job id and resume id
    app.delete('/api/resumes/:resumeId/jobs/:jobId', jobsController.destroy);

    // For any other request method on jobs items, we're going to return "Method Not Allowed"
    app.all('/api/resumes/:resumeId/jobs', (req, res) =>
    res.status(405).send({
        message: 'Method Not Allowed',
    }));

    //create an education for resume id
    app.post('/api/resumes/:resumeId/educations', educationsController.create);
    //update a job for a resume by education id and resume id
    app.put('/api/resumes/:resumeId/educations/:educationId', educationsController.update);
    //delete a job for a resume by education id and resume id
    app.delete('/api/resumes/:resumeId/educations/:educationId', educationsController.destroy);
};
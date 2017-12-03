const resumesController = require('../controllers').resumes;
const jobsController = require('../controllers').jobs;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome te Patrick Ngo Resume API!',
    }));

    app.post('/api/resumes', resumesController.create);
    app.get('/api/resumes', resumesController.list);

    app.put('/api/resumes/:resumeId', resumesController.update);
    app.get('/api/resumes/:resumeId', resumesController.retrieve);
    app.delete('/api/resumes/:resumeId', resumesController.destroy);

    app.post('/api/resumes/:resumeId/jobs', jobsController.create);
    app.put('/api/resumes/:resumeId/jobs/:jobId', jobsController.update);
    app.delete('/api/resumes/:resumeId/jobs/:jobId', jobsController.destroy);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/resumes/:resumeId/jobs', (req, res) =>
    res.status(405).send({
        message: 'Method Not Allowed',
    }));
};
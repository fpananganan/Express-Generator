// Task 3

const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnersRouter.route('/partners/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`); 
})
.post('/partners/:partnerID', (req, res) => {
    res.statusCode = 403; 
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`); 
})
.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`); 
    res.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
}) 
.delete('/partners/:partnerId', (req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`); 
}); 

module.exports = partnerRouter;
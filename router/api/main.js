const express = require('express');
const router = express.Router();
const mainWorker = require('../../workers/mainWorker');

router.get('/', (req, res) => res.json({status: 'success'}));

router.get('/start', (req, res) => {
    if (mainWorker.running) {
        return res.json({ status: "already running"})
    };
    mainWorker.start();
    res.json({ status: 'started worker'});
});

router.get('/stop', (req, res) => {
    if (!mainWorker.running) {
        return res.json({ status: "already stopped"})
    };
    mainWorker.stop();
    res.json({ status: 'stopped worker'});
});

module.exports = router;
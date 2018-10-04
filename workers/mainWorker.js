const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
    "*/5 * * * * *",
    () => {
        console.log('Every 5 seconds');
    },
    null,
    false,
    "America/New_York"
);

module.exports = mainWorker;
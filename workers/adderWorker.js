const CronJob = require('cron').CronJob;

const adderWorker = new CronJob(
    "* * * * * *",
    () => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        adderWorker.stop();
        let num = 0;
        for (i = 0; i < 100000005; i++) {
            num += getRandomInt(10, 101)
        }
        console.log(num);
    },
    null,
    false,
    "America/New_York"
);

module.exports = adderWorker;
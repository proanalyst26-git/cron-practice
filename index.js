const cron = require('node-cron');
const fs = require('fs');

cron.schedule('* * * * *', () => {
  const time = new Date().toLocaleString();
  const message = `Hello Kushal, it's ${time}\n`;
  fs.appendFileSync('log.txt', message);
  console.log('Logged:', time);
});

console.log('Cron started — logging every minute...');
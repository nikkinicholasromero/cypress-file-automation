var fs = require('fs');

module.exports = (on) => {
  on('task', {
    copyFile(args) {
      fs.copyFile(args.source, args.destination, () => {});

      return null;
    },
    fileExists(args) {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          --args.timeoutInSeconds;

          if (fs.existsSync(args.file)) {
            clearInterval(interval);
            resolve(true);
          }

          if (args.timeoutInSeconds == 0) {
            clearInterval(interval);
            resolve(false);
          }
        }, 1000);
      });
    }
  });
};

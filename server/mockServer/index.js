const server = require('mock-json-server');
const data = require('./data');

const app = server({
  '/reminders': {
    get: {
      data,
    },
    post: {
      data,
    }

  },
}, 8000); // Start the server with a JSON object;

// Start the server;
app.start();

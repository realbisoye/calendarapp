const uuid = require('uuid/v4');

const data = [{
  id: uuid(), title: 'Steve\'s Birthday', day: new Date(), time: '12:00:00'
}, {
  id: uuid(), title: 'Meeting with Clio', day: '23-08-2019', time: '12:00:00'
}];

module.exports = data;

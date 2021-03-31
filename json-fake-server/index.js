module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` });
  }
  return data;
};

var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

module.exports = () => {
  const data = { people: [] };
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.people.push({ id: i, name: faker.name.findName() });
  }
  return data;
};

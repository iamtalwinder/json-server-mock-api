const { faker } = require('@faker-js/faker');
const fs = require('fs');

const { DB_PATH } = require('../config');

const createFileIfNotExists = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '{}');
      console.log(`Created new file: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error creating file: ${err}`);
  }
};

createFileIfNotExists(DB_PATH);

const generateUsers = () => {
  let users = [];
  for (let id = 1; id <= 50; id++) {
    users.push({
      id,
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email()
    });
  }
  return users;
};

const generatePosts = () => {
  let posts = [];
  for (let id = 1; id <= 100; id++) {
    posts.push({
      id,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      userId: faker.number.int({ min: 1, max: 50 })
    });
  }
  return posts;
};

const generateComments = () => {
  let comments = [];
  for (let id = 1; id <= 200; id++) {
    comments.push({
      id,
      postId: faker.number.int({ min: 1, max: 100 }),
      body: faker.lorem.sentence(),
      userId: faker.number.int({ min: 1, max: 50 })
    });
  }
  return comments;
};


const data = {
  users: generateUsers(),
  posts: generatePosts(),
  comments: generateComments(),
};

fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

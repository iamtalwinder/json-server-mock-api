const express = require('express');
const jwt = require('jsonwebtoken');

const db = require('../db');
const { JWT_SECRET_KEY } = require('../config');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Missing username or password');
  }

  const existingUser = db.get('users').find({ username }).value();
  if (existingUser) {
    return res.status(409).send('Username already exists');
  }

  db.get('users').push({ id: Date.now(), username, password }).write();

  res.status(201).send('User created');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.get('users').find({ username, password }).value();

  if (!user) {
    return res.status(401).send('Incorrect username or password');
  }

  const accessToken = jwt.sign({ username, userId: user.id }, JWT_SECRET_KEY, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ username, userId: user.id }, JWT_SECRET_KEY, { expiresIn: '7d' });

  res.status(200).json({ accessToken, refreshToken });
});

router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).send('Refresh Token Required');
  }

  try {
    const userData = jwt.verify(refreshToken, JWT_SECRET_KEY);
    const newAccessToken = jwt.sign({ username: userData.username, userId: userData.userId }, JWT_SECRET_KEY, { expiresIn: '15m' });

    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).send('Invalid Refresh Token');
  }
});

module.exports = router;
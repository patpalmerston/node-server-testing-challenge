const express = require('express');
const Users = require('./users-model');

const router = express.Router();

router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'could not find users' });
		});
});

router.post('/', (req, res) => {
	const userData = req.body;
	Users.add(userData)
		.then(user => {
			res.status(201).json(user);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'can not make user' });
		});
});
module.exports = router;

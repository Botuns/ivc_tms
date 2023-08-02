const User = require('../models/_userModel');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const _username = username
        const _password = password
        const isExists = User.find(username)
        if(isExists){
            return res.status(400).json('user already exists')
        }
        const newUser = new User({ _username, _password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!',newUser });
    } catch (error) {
        res.status(500).json({ error: 'Unable to register user' });
    }
};

// User login
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const _password = password
        const _username = username
        const user = await User.findOne({ _username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user._password === _password) {
            // I might implement a JWT token here for authentication------- no need nigga!
            return res.status(200).json({ message: 'Login successful', user: user, status: true });
        } else {
            return res.status(401).json({ error: 'Incorrect password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Unable to login' });
    }
};

module.exports = { registerUser, loginUser };

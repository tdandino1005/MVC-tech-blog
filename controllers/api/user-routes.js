const router = require('express').Router();
const { User } = require('../../models');

// Route to create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to login a user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!user) {
            res.status(400).json({ message: 'No user found with this username!' });
            return;
        }

        const validPassword = await user.checkPassword(req.body.password);
    
    if (!validPassword) {
        res.status(400).json({ message: "No user found!" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.username = user.username;
        req.session.logged_in = true;
  
        res.json({ user, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route to logout a user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
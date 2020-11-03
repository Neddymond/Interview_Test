const express = require("express");
const router = new express.Router();

/** User Model */
const User = require("../models/User");

/** Auth Middleware */
const auth = require("../Middleware/auth");

/**Endpoint for creating a user using a route pointer*/
router.post("/user", async (req, res) => {
    const user = new User(req.body);
    /** Save user to the database */
    try{
        await user.save();

        /** Generate user token on signup */
        const token = await user.GenerateAuthToken();

        res.status(201).send({user, token});
    }catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

/** Endpoint for logging in a user */
router.post("/user/login", async (req, res) => {
    try{
        const user = await User.FindByCredentials(req.body.email, req.body.password);
        const token = await user.GenerateAuthToken();
        res.send({user, token});
    }catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
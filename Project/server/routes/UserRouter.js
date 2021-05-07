var router = require('express').Router()
const UserService = require('../services/UserService')

router.route("/login").get(UserService.loginGet)
router.route("/login").post(UserService.login)
router.route("/signIn").post(UserService.signIn)
router.route("/signUp").post(UserService.signUp)

module.exports = router;
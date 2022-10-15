const router = require("express").Router();
const path = require('path');

router.get('/feed/:id', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/newsletters/feed${req.params.id}.html`))
})

router.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/events.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'))
})

router.get('/promise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/promise.html'))
})

router.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/support.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router;
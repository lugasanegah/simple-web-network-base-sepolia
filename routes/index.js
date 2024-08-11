const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index');
});

router.get('/mint', fullProfileNew.getIndex);

router.get('/mint721', (req, res) => {
    res.render('mint721');
});

module.exports = router;

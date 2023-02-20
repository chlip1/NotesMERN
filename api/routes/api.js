const express = require('express')
const router = express.Router();

const notesActions = require('../controllers/api/notes')

router.get('/', notesActions.saveNote)

module.exports = router;
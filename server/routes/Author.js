const express = require("express");
const router = express.Router();

const Author = require("../controllers/Author");

//router.post("/addauthor", Author.addAuthor);
router.post("/addauthor", Author.addAuthor);
router.post('/authors/signin', Author.signIn);
router.get('/authors/:username', Author.getAuthor);
router.get('/authors/', Author.allAuthorDetails);
router.get('/authors/posts/:authorID', Author.getAuthorPost);







module.exports = router;
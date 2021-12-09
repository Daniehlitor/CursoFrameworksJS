'use strinct'

var express = require("express");
var ArticleControler = require("../controllers/article");

var router = express.Router();

var multipart = require("connect-multiparty");
const article = require("../models/article");
var md_upload = multipart();

//Rutas prueba
router.get("/test-de-controlador", ArticleControler.test);
router.post("/datos-curso", ArticleControler.datosCurso);

//Rutas importantes
router.post("/save", ArticleControler.save);
router.get("/articles/:last?", ArticleControler.getArticles);
router.get("/article/:id", ArticleControler.getArticle);
router.put("/article/:id", ArticleControler.update);
router.delete("/article/:id", ArticleControler.delete);
router.post("/upload-image/:id?", md_upload, ArticleControler.upload);
router.get("/get-image/:image", ArticleControler.getImage);
router.get("/search/:search", ArticleControler.search);

module.exports = router;
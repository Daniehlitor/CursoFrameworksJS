'use strict'
var validator = require("validator");
var Article = require("../models/article");
var fs = require("fs");
var path = require("path")

const controller = {

    datosCurso: function (req, res) {
        var hola = req.body.Hola;
        return res.status(200).send({
            curso: "Master en frameworksJS",
            autor: "Victor Robles",
            url: "VictorRobles.es",
            hola
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            mensaje: "Soy la accion test de mi controlador"
        })
    },

    save: function(req, res) {
        //Tomar parametros
        var params = req.body;
        //Validar datos
        try {
            var val_tittle = !validator.isEmpty(params.tittle);
            var val_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: "error",
                mensaje: "Faltan datos por enviar"
            });
        }
        //Validar que los datos existan
        if (val_tittle && val_content) {
            //Crear objeto
            var article = new Article();
            //Asignar valores
            article.tittle = params.tittle;
            article.content = params.content;
            article.image = null;
            //Guardar articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: "error",
                        mensaje: "El articulo no se ha guardado",
                        detail: err
                    })
                }
                return res.status(200).send({
                    status: "success",
                    articleStored
                });
            });
        } else {
            return res.status(200).send({
                status: "error",
                mensaje: "Los datos no son validos"
            });
        }
    },

    update: function (req, res) {
        var article_id = req.params.id;
        var params = req.body;
        try {
            var val_tittle = !validator.isEmpty(params.tittle);
            var val_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                mensaje: "Faltan datos por enviar"
            });
        }
        if (val_tittle && val_content) {
            Article.findOneAndUpdate({_id: article_id}, params, {new: true}, (err, articleUpdated) => {
                if (err) {
                   return res.status(500).send({
                       status: "error",
                       mensaje: "Error al actualizar",
                       detail: err
                   });
                }
                if (!articleUpdated) {
                    return res.status(404).send({
                        status: "error",
                        mensaje: "No existe el articulo"
                    })
                }
                return res.status(200).send({
                    status: "success",
                    mensaje: "Articulo actualizado",
                    article: articleUpdated
                });
            })
        } else {
            return res.status(404).send({
                status: "error",
                mensaje: "La validacion no es correcta"
            });
        }
    },

    delete: function (req,res) {
        var article_id = req.params.id;
        Article.findOneAndDelete({_id: article_id}, (err, articleDeleted) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Error al borrar",
                    detail: err
                });
            } 
            if (!articleDeleted) {
               return res.status(404).send({
                   status: "error",
                   mensaje: "El articulo no existe"
               }) 
            }
            return res.status(200).send({
                status: "success",
                article: articleDeleted
            });
        });
    },
                      
    getArticles: function (req, res) {
        const query = Article.find({});
        const last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Error al enviar articulos",
                    detail: err
                })
            } 
            if (!articles){
                return res.status(404).send({
                    status: "error",
                    mensaje: "No hay articulos para mostrar"
                })
            }
            return res.status(200).send({
                status: "success",
                articles
            });
        });
    },

    getArticle: function (req, res) {
        const articleId = req.params.id;
        if (!articleId) {
            res.status(404).send({
                status: "error",
                mensaje: "El articulo no existe"
            });
        }
        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(404).send({
                    status: "error",
                    mensaje: "No se encontro el articulo"
                });
            }
            return res.status(200).send({
                status: "success",
                article
            })
        });
    },

    upload: function (req, res) {
        //Recoger el fichero de la peticion
        var file_name = "Imagen no subida...";
        if (!req.files) {
            return res.status(404).send({
                status: "error",
                mensaje: file_name
            })
        }
        //Conseguir el nombre y la extension del archivo
        var file_path = req.files.file0.path;
        var file_name = file_path.split("\\").pop();
        var file_ext = file_name.split(".").pop();
        //Comprobar la extencion (solo imagenes)
        if (file_ext != "png" && file_ext != "jpg" && file_ext != "jpeg" && file_ext != "gif") {
            //Borrar archivo si no es imagen
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: "error",
                    mensaje: "La extension de la imagen no es valida"
                });
            });
        } else {
            //Buscar el articulo y actualizar imagen
            var article_id = req.params.id;
            Article.findOneAndUpdate({_id: article_id}, {image: file_name}, {new: true}, (err, articleUpdated) => {
                if (err || !articleUpdated) {
                    return res.status(500).send({
                        status: "error",
                        mensaje: "Error al guardar imagen de articulo",
                        detail: err
                    })
                }
                return res.status(200).send({
                    status: "success",
                    article: articleUpdated,
                    fichero: req.files
                });
            });
        }
    },

    getImage: function (req, res) {
        const image = req.params.image;
        const path_file = `app/upload/articles/${image}`;
        fs.readFile(path_file, (err, data) => {
            if (err || !data) {
                return res.status(404).send({
                    status: "error",
                    mensaje: "La imagen no existe",
                    detail: err
                });
            }
            return res.sendFile(path.resolve(path_file));
        });
    },

    search: function (req, res) {
        const search_string = req.params.search;
        console.log(search_string);
        Article.find({ "$or": [
            { "tittle": { "$regex": search_string, "$options": "i" }},
            { "content": { "$regex": search_string, "$options": "i" }},
        ]}).sort([["date", "descending"]]).exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Error en la peticion",
                    detail: err
                });
            }
            if (!articles || articles.length <= 0) {
                return res.status(404).send({
                    status: "error",
                    mensaje: "No hay articulos que coincidan con tu busqueda"
                });
            }
            return res.status(200).send({
                status: "success",
                articles
            });
        });
    },

}; // end controller

module.exports = controller;
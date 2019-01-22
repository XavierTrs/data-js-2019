/*
Importer & config
*/
    const express = require('express');
    const frontRouter = express.Router();
//

/*
Définition
*/
    class FrontRouterClass{
        constructor(){};

        routes(){
            //=> Homepage
            frontRouter.get('/', (req, res) =>{
                res.render('index');
            });

            frontRouter.get('/convert', (req, res) =>{
                res.render('convert');
            });
        };

        init(){
            this.routes();
            return frontRouter;
        }
    }
//

/*
Export
*/
    module.exports = FrontRouterClass;
//
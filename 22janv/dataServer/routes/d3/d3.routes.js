/*
Importer & config
*/
const express = require('express');
const d3Router = express.Router();
//

/*
Définition
*/
class d3RouterClass{
    constructor(){};

    routes(){
        d3Router.get('/', (req, res)=> {
            res.json({msg:"Hello API"});
        });
    };

    init(){
        this.routes();
        return d3Router;
    }
}
//

/*
Export
*/
module.exports = d3RouterClass;
//
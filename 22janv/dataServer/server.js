/*
Import
- Importer tous les modules
*/
    //=> NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path')
    const ejs = require('ejs')
    const bodyParser = require('body-parser');

    //=> Inner
    const FrontRouterClass = require('./routes/front/front.routes');
    const d3RouterClass = require('./routes/d3/d3.routes');
//

/*
Configuration
- Définition du serveur
*/
    const server = express();
    const port = process.env.PORT;

    class ServerClass{
        init(){
            //=> Client folder
            server.set('views',__dirname + '/www');
            server.unsubscribe(express.static(path.join(__dirname, 'www')));

            //=> View engine
            server.engine('html',ejs.renderFile);
            server.set('view engine', 'html');

            //=> Set Body-Parser
            server.use(bodyParser.json({limit:'10mb'}));
            server.use(bodyParser.urlencoded({extended:true}));

            //=> Routers
            const d3Router = new d3RouterClass();
            const frontRouter = new FrontRouterClass();
           
            server.use('/api/d3',d3Router.init());
            server.use('/',frontRouter.init());

            //=> Start server
            this.launch();
        };

        launch(){
            server.listen(port, () => {
                console.log(`Server listening on port ${port}`);
            });
        };
    };
//

/*
Lancer le serveur
*/
    new ServerClass().init();


//
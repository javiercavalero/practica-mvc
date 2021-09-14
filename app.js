const express = require('express');
const app = express();
const port=3000;
const path= require ('path');

/* recursos estaticos */
app.use(express.static('public'));

/* configuracion del motor de plantillas */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

/* controladores */
const mainRouter= require('./routers/main');

app.use('/',mainRouter);



/* app.get('/about',about);
app.get('/',home); */

app.listen(port, ()=> { console.log(`servidor corriendo en http://localhost:${port}`);
});
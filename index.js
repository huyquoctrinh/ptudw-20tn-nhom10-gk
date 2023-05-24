
'use strict';

const express = require('express');
const app = express();
const port = process.env.port || 5001;
const expressHandleBars = require('express-handlebars');
// const {createStarList} = require('./controllers/handlebarsHelper');
const {createPagination} = require('express-handlebars-paginate');
// cau hinh public static 
app.use(express.static(__dirname + '/public'));


//cau hinh su dung express handle bar
app.engine('hbs', expressHandleBars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        createPagination
    }
}));
app.set('view engine', 'hbs');

//cau hinh route
app.use('/', require('./routes/indexRoute'));
app.use('/Categories', require('./routes/categoryRoute'));
app.use('/newsDetail', require('./routes/newsDetailRoute'));

// khoi dong web server

// app.get('/createTables', (req, res) =>{
//   let models = require('./models');
//   models.sequelize.sync().then(() => {
//       res.send('table created!');
//   });
// })

app.listen(port, () => {
    console.log(`server is running on ${port}`)
});
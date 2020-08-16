const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.locals.projects = require('./data.json').projects;

// Route --> Index
const mainRoutes = require('./routes');
app.use(mainRoutes);
// Route --> About
const aboutRoutes = require('./routes/about');
app.use('/about', aboutRoutes);
// Route --> Project
const projectRoutes = require('./routes/project');
app.use('/project', projectRoutes);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log('App is running in localhost:3000');
})
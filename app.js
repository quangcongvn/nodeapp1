var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
/// [generated above] PUT FIRST FILE /// =========================================================

/// Cong add ==============================================================================
// proxy site to port
const port = 4001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// security
var helmet = require('helmet')
app.use(helmet())
// performance
var compression = require('compression')
app.use(compression())

// REQUIRE ======================================================
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var models = require('./models/notesModel');
var dbName = "testDB";
models.connect(`mongodb://localhost/${dbName}`, function(err) {
    if(err)
    throw err;
});
notesRouter.configure(models);
indexRouter.configure(models);



// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

/// USE ======================================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter.index);
app.use('/users', usersRouter);
app.get('/noteadd', notesRouter.addView);
app.post('/notesave', notesRouter.add);
app.use('/noteedit', notesRouter.updateView); 
app.post('/update', notesRouter.updateView); 
app.use('/notedestroy', notesRouter.destroy);
app.post('/notedodestroy', notesRouter.dodestroy);
app.use('/noteview', notesRouter.view); 

/// END Cong add ===========================================================================

/// [generated below] PUT LAST FILE /// =========================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// /// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app; 


/// WARNING:  add new section above
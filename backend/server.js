const express = require('express')
const morgan = require('morgan')
var fs = require('fs')
var path = require('path')


const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

var app = express()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
}).then(() => console.log('DB connected'));

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json());
app.use(cookieParser());

if(process.env.NODE_ENV === 'development'){
  app.use(cors({origin: `${process.env.CLIENT_URL}`}));

}

app.use('/api',blogRoutes);
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);

const port = process.env.PORT || 8000;
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`);
})

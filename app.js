const sequelize = require('./database/mysql');
const body_Parser = require('body-parser');
const routes_work = require('./routes/work');
const routes_workDone = require('./routes/workDone');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(body_Parser.json({extended:false}))
app.use(cors());
app.use(routes_work);
app.use(routes_workDone);


sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch(err=>console.log(err));
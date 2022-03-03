import express from 'express';

import bodyParser from 'body-parser';
import  usersRoutes from './routes/users.js';

const app = express();
const PORT= 8000;

app.use(bodyParser.json());

// all routes start with users
app.use('/users', usersRoutes)

app.get('/', (req, res)=>{
    console.log('[TEST]!');
    res.send('Hello from Homepage!');
});

app.listen(PORT,()=> console.log(`Server running on port: http://localhost:${PORT}`))
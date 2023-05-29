
import express from 'express';
import cors from 'cors'
import router from './src/router/signup.js';

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/v1', router)




app.listen(port, () =>
    console.log(`server is running on ${port}`)
)
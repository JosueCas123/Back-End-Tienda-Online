import express from 'express';
import { routerApi } from './routes/index.js';
import { errorBoon, errorHndle, logErrors, ormErrorHandler } from './middleware/error.handler.js';
import cors from 'cors';




const app = express();
app.use(express.json());

app.use(cors());
const port = 3000;


app.get('/api/v1/', (req, res) => {
  res.send('hola mi server')
});

routerApi(app)

app.use(logErrors)
app.use(errorBoon)
app.use(ormErrorHandler)
app.use(errorHndle)


app.listen(port, () => {
  console.log('mi port' + port)
})

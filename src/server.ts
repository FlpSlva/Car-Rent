import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(port, () => console.log('server is running'));
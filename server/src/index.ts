import express from 'express';
import { tweets } from './tweets';
import { instagram } from './instagram';
import { posts} from './posts';
const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({tweets,instagram,posts});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
import * as express from 'express';
import * as multer from 'multer';
import putParseCSV from './handlers/putParseCSV';

const upload = multer();

export default function createParseRouter(config: NewsCart.ServerConfig): express.Router {
    const parseRouter = express.Router();
    parseRouter.put(config['routes']['parse']['PUT'], upload.single('contacts'), putParseCSV)
    return parseRouter;
}   
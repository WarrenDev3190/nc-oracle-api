import * as express from 'express';
import csvParser from '../../../../services/csvParser'

export default function putParseCSV(req: express.Request, res: express.Response): void {
    const parsedContacts = csvParser.extractContacts(req.file.buffer);
    res.status(200)
        .json({
            errors: [],
            data: parsedContacts
        });
}


/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:20:56-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:29:17-06:00
 */

import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import configureRoutes from './routes';

const app: express.Application = express();
export const server: http.Server = http.createServer(app);

// Default Express Application Middleware
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

/**
 * [startServer description]
 * @param server [description]
 * @param config [description]
 */
export function startServer(server: http.Server, config: NewsCart.ServerConfig): void {
  console.info(`Starting NewsCartOracleAPI with config: ${JSON.stringify(config)}`);
  console.info('Mounting Routers');
  configureRoutes(app, config);
  server.listen(config.port, (error: Error) => {
    if (error) throw error;
    console.info(`Server running on port: ${config.port}`);
  });
}


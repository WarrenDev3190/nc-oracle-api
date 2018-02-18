/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:41:46-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T15:03:12-06:00
 */
import * as express from 'express';
import createPingRouter from './ping';

export default function configureRoutes(app: express.Application, config: NewsCart.ServerConfig): void {
    app.use(function setApplicationHeaders(req, res, next) {
        res.setHeader('x-nc-server-name', config.name);
        next();
    });
    app.use(createPingRouter(config));
}
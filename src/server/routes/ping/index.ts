/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:30:14-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:34:05-06:00
 */
import * as express from 'express';
import getPing from './handlers/getPing';

export default function createPingRouter(config?: NewsCart.ServerConfig): express.Router {
  const pingRouter = express.Router();
  if (config.routes['ping']) {
    pingRouter.get(config.routes['ping']['GET'], getPing);
  }
  return pingRouter;
}

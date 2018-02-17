/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:08:41-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:36:57-06:00
 */
require('dotenv').config();
import { server, startServer } from './server';
import config from './config';

startServer(server, config);

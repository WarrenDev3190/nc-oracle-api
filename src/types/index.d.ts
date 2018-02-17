/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:11:54-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.d.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:40:17-06:00
 */

 declare module NewsCart {
   interface RouteDefinition {
       [key: string]: string;
   }

   export interface ServerConfig {
     port: number;
       routes: {
           [key: string]: RouteDefinition;
       };
   }
 }

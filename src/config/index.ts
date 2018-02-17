/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:35:16-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:41:33-06:00
 */

const config: NewsCart.ServerConfig = {
  port: parseInt(process.env.SERVER_CONFIG_PORT),
  routes: {
    "ping": {
      "GET": process.env.SERVER_CONFIG_ROUTES_GET_PING
    }
  }
}

export default config;
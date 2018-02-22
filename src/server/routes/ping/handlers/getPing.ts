/**
 * @Author: warrensadler
 * @Date:   2018-02-17T13:32:44-06:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: getPing.ts
 * @Last modified by:   warrensadler
 * @Last modified time: 2018-02-17T13:33:41-06:00
 */

/**
 * [getPing description]
 * @param req [description]
 * @param res [description]
 */
function getPing(req: Express.Request, res: Express.Response): void {
  res.status(200).json({
    errors: [],
    data: "Pong"
  });
}

export default getPing;

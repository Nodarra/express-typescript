import { Router, Request, Response, NextFunction } from 'express';
import { get } from './Decorators/routes';

@controller('/')

class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void{
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <lable>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  });
}

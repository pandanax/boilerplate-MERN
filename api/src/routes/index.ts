import {Express} from 'express';
import userRoutes from '../entities/user/routes';

export default class Routes {
    _app: Express;
    constructor(app: Express) {
        this._app = app;
    }
    register() {
        userRoutes.register(this._app)
    }
}

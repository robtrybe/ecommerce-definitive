import { Sequelize } from 'sequelize';

import config from '../config/config';

const environment: string = process.env.NODE_ENV || 'development';

export default new Sequelize(config[environment as keyof object]);

import { STRING, INTEGER, ENUM } from "sequelize";
import { Model } from "sequelize";
import db from '.';

class User extends Model{}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  password: STRING,
  status: ENUM('registered', 'confirmed'),
}, {
  sequelize: db,
  underscored: true,
});

export default User;
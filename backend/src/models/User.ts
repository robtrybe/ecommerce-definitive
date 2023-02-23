import { STRING, INTEGER } from "sequelize";
import { Model } from "sequelize";
import db from '.';

class User extends Model{}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
  }
}, {
  sequelize: db,
  underscored: true
});

export default User;
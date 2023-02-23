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
  firstName: {
    type: STRING,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false
});

export default User;
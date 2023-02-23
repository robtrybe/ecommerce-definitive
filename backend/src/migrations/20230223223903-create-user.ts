'use strict';

import { QueryInterface, INTEGER, STRING } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable('users', { 
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  }
};

'use strict';
import { QueryInterface, INTEGER, ENUM, STRING, DATE, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export = {
  async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: STRING,
        allowNull: false,
      },
      last_name: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      password: {
        type: STRING,
        allowNull: false
      },
      status: {
        type: ENUM('registered', 'confirmed'),
        defaultValue: 'registered'
      },
      created_at: {
        type: DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at:{
        type: DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  }
};

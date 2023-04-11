import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'postgres',
  password: '1234',
	define: {
    underscored: true
  }
})

export { Sequelize }

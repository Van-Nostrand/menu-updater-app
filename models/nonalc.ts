import { DataTypes } from 'sequelize'
import sequelize from './sql'

const NonAlc = sequelize.define('NonAlc', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  notes: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default NonAlc

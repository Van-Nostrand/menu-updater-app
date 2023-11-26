import { DataTypes } from 'sequelize'
import sequelize from './sql'

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  diet: {
    type: DataTypes.STRING
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menuSection: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Food

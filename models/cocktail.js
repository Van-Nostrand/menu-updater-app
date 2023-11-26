import { DataTypes } from 'sequelize'
import sequelize from './sql'

const Cocktail = sequelize.define('Cocktail', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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

export default Cocktail

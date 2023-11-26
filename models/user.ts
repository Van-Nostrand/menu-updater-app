import { DataTypes, Model } from 'sequelize'
import sequelize from './sql'
import bcrypt from 'bcrypt'

// type TUserAttributes = {
//   username: string
//   email: string
//   password: string
//   profileImageUrl: string
// }

class User extends Model {
  username: string
  email: string
  password: string
  profileImageUrl: string

  id: string

  async comparePassword (candidate: string) {
    return bcrypt.compare(candidate, this.password)
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    async set (value: string) {
      const hash = await bcrypt.hash(value, 10)
      this.setDataValue('password', hash)
    }
  }
}, {
  sequelize,
  modelName: 'User'
})

export default User

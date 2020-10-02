
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    transcript:DataTypes.STRING,
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get () {
        return moment(this.getDataValue('created_at')).format(
          'DD-MM-YYYY'
        )
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get () {
        return moment(this.getDataValue('updated_at')).format(
          'YYYY-MM-DD HH:mm:ss'
        )
      }
    }
   
  })

  return Event;
};
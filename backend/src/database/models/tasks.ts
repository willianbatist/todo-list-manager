import { DataTypes, Model } from 'sequelize';
import db from '.';

class Tasks extends Model {
  public id!: number;
  public task: string;
  public status: string;
}

Tasks.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  task: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tasks',
  timestamps: false,
});

export default Tasks;
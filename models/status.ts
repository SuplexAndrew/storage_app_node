import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface StatusAttributes {
    id?: number
    title: string
    code: number
}

export interface StatusModel extends Model<StatusAttributes>, StatusAttributes {
}

export class Status extends Model<StatusModel, StatusAttributes> {
}

export type StatusStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): StatusModel;
};

export function StatusFactory(sequelize: Sequelize): StatusStatic {
    return <StatusStatic>sequelize.define("statuses", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        code: {
            allowNull: false,
            unique: true,
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}
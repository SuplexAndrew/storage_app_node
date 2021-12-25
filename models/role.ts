import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface RoleAttributes {
    id?: number
    name: string
    value: number
}

export interface RoleCreationAttributes {
    name: string
    value: number
}

interface RoleModel extends Model<RoleAttributes, RoleCreationAttributes>, RoleAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export class Role extends Model<RoleModel, RoleAttributes> {
}

export type RoleStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): RoleModel;
};

export function RoleFactory(sequelize: Sequelize): RoleStatic {
    return <RoleStatic>sequelize.define("roles", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        value: {
            allowNull: false,
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
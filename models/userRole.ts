'use strict';
import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface UserRoleAttributes {
    id?: number
    userId: number
    roleId: number
}

export interface UserRoleCreationDto {
    userId: number
    roleId: number
}

interface UserRoleModel extends Model<UserRoleAttributes, UserRoleCreationDto>,
    UserRoleAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserRoleStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserRoleModel;
};
export class UserRole extends Model<UserRoleModel, UserRoleAttributes> {}

export function UserRoleFactory (sequelize: Sequelize): UserRoleStatic {
    return <UserRoleStatic>sequelize.define("user_roles", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: DataTypes.NOW,
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

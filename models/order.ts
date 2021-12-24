import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface OrderAttributes {
    id?: number
    userId: number
    statusId: number
}

interface OrderModel extends Model<OrderAttributes>, OrderAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export class Order extends Model<OrderModel, OrderAttributes> {
}

export type OrderStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): OrderModel;
};

export function OrderFactory(sequelize: Sequelize): OrderStatic {
    return <OrderStatic>sequelize.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        statusId: {
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
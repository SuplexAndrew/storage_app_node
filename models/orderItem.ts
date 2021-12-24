import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface OrderItemAttributes {
    id?: number
    orderId: number
    itemId: number
    itemCount: number
}

export interface OrderItemModel extends Model<OrderItemAttributes>, OrderItemAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export class OrderItem extends Model<OrderItemModel, OrderItemAttributes> {
}

export type OrderItemStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): OrderItemModel;
};

export function OrderItemFactory(sequelize: Sequelize): OrderItemStatic {
    return <OrderItemStatic>sequelize.define("order_items", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        itemId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        itemCount: {
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
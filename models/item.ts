import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";
import {ItemDto} from "./dto/ItemDto";

export interface ItemAttributes {
    id?: number
    name: string
    price: number
    countInStorage: number
}

export interface ItemModel extends Model<ItemAttributes, ItemDto>, ItemAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
export class Item extends Model<ItemModel, ItemAttributes> {}

export type ItemStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ItemModel;
};

export function ItemFactory (sequelize: Sequelize): ItemStatic {
    return <ItemStatic>sequelize.define("items", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        price: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        countInStorage: {
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